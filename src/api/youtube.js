import axios from "axios";

const KEY = "AIzaSyC5Gay0SB8Vow6fazPph9LISZntVXSa4LA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
});
