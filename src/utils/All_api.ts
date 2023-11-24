export const Google_api_key = import.meta.env.VITE_APP_API_KEY;

console.log(Google_api_key);

export const youtube_video_api =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  Google_api_key;

export const channelImage_api =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  Google_api_key;

export const video_recommendations_api = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&maxResults=50&regionCode=in&key=${Google_api_key}&channelId=`;

export const videoDetailsApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  Google_api_key;

export const youtube_search_api =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const Search_results_api =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";

export const video_comments_details_api =
  "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=100&order=relevance&key=" +
  Google_api_key +
  "&videoId=";
