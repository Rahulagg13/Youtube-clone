import { useState, useCallback } from "react";
import axios from "axios";
import { youtube_video_api, channelImage_api } from "../utils/All_api";
function useFetch() {
  const [allVideos, setAllVideos] = useState<Item[]>([]);
  const [video, setVideo] = useState<videoDetails>();

  const getVideos = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios.get(youtube_video_api);
      console.log(data);
      setAllVideos((prev) => [...prev,...data.items]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getSingleVideo = useCallback(async (id: string): Promise<void> => {
    try {
      const { data } = await axios.get(channelImage_api + "&id=" + id);
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
  };
}

export default useFetch;
