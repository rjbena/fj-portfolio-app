import { createNewBlog } from "../../../../lib/api/blogs";
import auth0 from "../../../../utils/auth0";

export default async function createBlog(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);

    const { data } = await createNewBlog(req.body, accessToken);

    return res.json(data);
  } catch (error) {
    return res.status(error.status || 420).end(error.response.data);
  }
}
