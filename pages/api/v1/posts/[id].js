import axios from "axios";

export default async (req, res) => {
  try {
    const axiosRes = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${req.query.id}`
    );
    const post = await axiosRes.data;
    res.status(200).json(post);
  } catch (error) {
    res.status(error.status || 400).json({ message: "Api error!" });
  }
};
