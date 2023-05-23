import React from "react";
import { useMediaQuery } from "react-responsive";
import YouTube from "react-youtube";

interface YouTubeVideoProps {
  videoId: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId }) => {




  const isMediumScreen = useMediaQuery({minWidth :1151 , maxWidth: 1260});
  const isTabletScreen = useMediaQuery({minWidth:1140 ,  maxWidth: 1150});
  const isSmallercreen = useMediaQuery({minWidth:861 , maxWidth: 1141});
  const isXSmallercreen = useMediaQuery({maxWidth: 860});
  let opt = {
    height:!isXSmallercreen ?  !isSmallercreen ? !isMediumScreen ? "500" : isTabletScreen ?  '350' : '400' : '250': '200',
    width: !isXSmallercreen ?!isSmallercreen ? !isMediumScreen ? "800" : isTabletScreen ?  '500' :'550' : '350' : '300',
  };
  const onReady = (event: any) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <>
      <YouTube videoId={videoId} opts={opt} onReady={onReady} />
    </>
  );
};

export default YouTubeVideo;
