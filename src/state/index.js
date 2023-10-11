import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: []
}


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token
        },
        setLogout: (state) => {
            state.user = null
            state.token = null
        },
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends
            }
            else {
                console.error("user friends non existent")
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;

        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post._id) return action.payload.post;
                return post;
            })
            state.posts = updatedPosts
        }
    }
})



export const { setPost, setPosts, setFriends, setLogin, setLogout, setMode } = authSlice.actions
export default authSlice.reducer



// redux has the idea where we can't change the state directly and we'll replace the object
// toolkit has the built in library called limer which kind of acts like we can directly modify the state even though it's not happening 
