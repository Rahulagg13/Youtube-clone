import { useState, useCallback } from "react";
import axios from "axios";
import {
  youtube_video_api,
  channelImage_api,
  // video_recommendations_api,
  videoDetailsApi,
  video_comments_details_api,
} from "../utils/All_api";
function useFetch() {
  const [allVideos, setAllVideos] = useState<Item[]>([]);
  const [video, setVideo] = useState<Item[]>([]);
  const [videoDetail, setVideoDetail] = useState<Item[]>([]);
  const [commentsDetail, setCommentDetail] = useState<CommentItem[]>([]);
  // const [recommendedVideo, setRecommendedVideo] = useState();

  const getVideos = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios.get(youtube_video_api);
      setAllVideos((prev) => [...prev, ...data.items]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getSingleVideo = useCallback(async (id: string): Promise<void> => {
    try {
      const { data } = await axios.get(channelImage_api + "&id=" + id);
      setVideo(data?.items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getVideoDetails = useCallback(async (id: string): Promise<void> => {
    try {
      const { data } = await axios.get(videoDetailsApi + "&id=" + id);
      setVideoDetail(data.items || []);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getCommentDetails = useCallback(async (id: string): Promise<void> => {
    try {
      const { data } = await axios.get(video_comments_details_api + id);
      setCommentDetail(data.items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // function for RecommendedVideo

  // const getRecommendedVideo = useCallback(async (id: string): Promise<void> => {
  //   try {
  //     const { data } = await axios.get(video_recommendations_api + id);
  //     console.log(data);
  //     setRecommendedVideo(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return {
    getVideos,
    allVideos,
    getSingleVideo,
    video,
    getVideoDetails,
    videoDetail,
    getCommentDetails,
    commentsDetail,
    // getRecommendedVideo,
  };
}

export default useFetch;
