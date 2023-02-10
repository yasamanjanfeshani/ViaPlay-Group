import data from "./data.json";
import Cors from "cors";

const cors = Cors({
  methods: ["GET", "HEAD"],
});

const getPage = () =>
  new Promise((res, rej) => {
    return setTimeout(() => res(data), 500);
  });

async function handler(req, res) {
  await getPage(req, res, cors);
  res.json(data);
}

export default handler;
