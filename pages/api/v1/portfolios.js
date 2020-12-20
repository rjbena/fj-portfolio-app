import { createNewPortfolio } from "../../../lib/api/portfolios";

export default async function createPortfolio(req, res) {
  try {
    const data = req.body;
    await createNewPortfolio(data);
    return res.json({ message: "Portfolio was created!" });
  } catch (error) {
    return res.status(e.status || 400).end(e.message);
  }
}
