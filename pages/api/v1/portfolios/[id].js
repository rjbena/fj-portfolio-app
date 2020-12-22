import { getPortflioById } from "../../../../lib/api/portfolios";

export default async function handlePortfolio(req, res) {
  //console.log(req.query.id);
  const data = await getPortflioById(req.query.id);

  return res.json(data);
}
