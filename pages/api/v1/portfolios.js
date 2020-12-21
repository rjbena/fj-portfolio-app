import { createNewPortfolio } from "../../../lib/api/portfolios";
import auth0 from "../../../utils/auth0";

export default async function createPortfolio(req, res) {
  try {
    const { accessToken } = await auth0.getSession(req);

    const data = req.body;
    await createNewPortfolio(data, accessToken);
    return res.json({ message: "Portfolio was created!" });
  } catch (error) {
    return res.status(e.status || 400).end(e.message);
  }
}
