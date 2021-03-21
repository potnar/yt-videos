import axios from "axios";

const KEY = "AIzaSyBYy3LuG4OI1FjOZ7-DhIIoMZGcZseEKys";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 15,
    key: KEY,
  },
});
