import {
  getPortflioById,
  updatePortfolio,
} from "../../../../lib/api/portfolios";
import auth0 from "../../../../utils/auth0";

export default async function handlePortfolio(req, res) {
  try {
    if (req.method === "GET") {
      const data = await getPortflioById(req.query.id);
      return res.json(data);
    }

    if (req.method === "PATCH") {
      const { accessToken } = await auth0.getSession(req);
      const { data } = await updatePortfolio(
        req.query.id,
        req.body,
        accessToken
      );
      return res.json(data);
    }
  } catch (error) {
    return res.status(error.status || 420).end(error.response.data);
  }
}
