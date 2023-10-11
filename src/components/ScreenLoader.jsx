import { InfinitySpin,ProgressBar } from "react-loader-spinner";

const ScreenLoader = () => {
  return (
    <div style={{ }}>
      <ProgressBar
  height="40"
  width="60"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#51E5FF'
  barColor = '#51E5FF'
/>
    </div>
  );
};

export default ScreenLoader;
