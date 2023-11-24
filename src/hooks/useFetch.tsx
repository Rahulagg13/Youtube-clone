import { useState, useCallback } from "react";
import axios from "axios";
import { youtube_video_api, channelImage_api } from "../utils/All_api";
function useFetch() {
  const [allVideos, setAllVideos] = useState<YotubeVideos>();
  const [video, setVideo] = useState<videoDetails>();
  const [scrolledDown, setScrollDown] = useState(false);
  const getVideos = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios.get(youtube_video_api);
      setAllVideos(data);
      setScrollDown(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getSingleVideo = useCallback(async (id: string): Promise<void> => {
    try {
      const { data } = await axios.get(channelImage_api + "&id=" + id);
      console.log(data);
      setVideo(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    getVideos,
    allVideos,
    getSingleVideo,
    video,
    scrolledDown,
    setScrollDown,
  };
}

export default useFetch;
