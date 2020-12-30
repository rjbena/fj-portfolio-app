import { getBlogById } from "../../../../lib/api/blogs";
import auth0 from "../../../../utils/auth0";

export default async function handleBlog(req, res) {
  try {
    if (req.method === "GET") {
      const data = await getBlogById(req.query.id);
      return res.json(data);
    }

    if (req.method === "PATCH") {
      const { accessToken } = await auth0.getSession(req);
      const { data } = await updateBlog(req.query.id, req.body, accessToken);
      return res.json(data);
    }
    if (req.method === "DELETE") {
      const { accessToken } = await auth0.getSession(req);
      const { data } = await deleteBlog(req.query.id, accessToken);
      return res.json(data);
    }
  } catch (error) {
    return res.status(error.status || 420).end(error.response.data);
  }
}
