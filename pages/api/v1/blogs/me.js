import { getBlogByUser } from "../../../../lib/api/blogs";
import auth0 from "../../../../utils/auth0";

export default async function getBlog(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);

    const data = await getBlogByUser();

    return res.json(data);
  } catch (error) {
    return res.status(error.status || 420).end(error.response.data);
  }
}
