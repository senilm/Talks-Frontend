import { Box, useMediaQuery } from "@mui/material"
import { useEffect,useState } from "react"
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector"
import { useParams } from "react-router-dom"
import Navbar from "scenes/navbar"
import FriendListWidget from "scenes/widgets/FriendListWidget"
import MyPostWidget from "scenes/widgets/MyPostWidget"
import PostsWidget from "scenes/widgets/PostsWidget"
import UserWidget from "scenes/widgets/UserWidgets"


const ProfilePage = () => {
  const [user,setUser] = useState(null);
  const {userId} = useParams();
  const token = useSelector((state)=>state.token)
  const {picture} = useSelector((state)=>state.user)
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)")

  const getUser = async () =>{
    const response =  await fetch(`https://talks-hrgs.onrender.com/users/${userId}`,{
      method:"GET",
      headers:{Authorization: `Bearer ${token}`}
    })
    const data = await response.json()
    setUser(data);
  }
  useEffect(()=>{
    getUser()
  },[])

  if(!user) return null;
  return (
    <Box>
      <Navbar/>
      <Box 
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      > 
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picture={picture}/>
          <Box m="2rem 0"/>
          <FriendListWidget userId={userId}/>
        </Box>

        <Box 
        flexBasis={isNonMobileScreens ? "42%" : undefined}
        mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picture = {picture}/>
          <Box m="2rem 0"/>
          <PostsWidget userId={userId} isProfile/>
        </Box>

      </Box>
    </Box>
  )
}

export default ProfilePage