import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = await axiosRes.data.slice(0, 10);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(error.status || 400).json({ message: "Api error!" });
  }
};
