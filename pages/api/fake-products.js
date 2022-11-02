import Data from "../../data/db";

const handler = (req, res) => {
    res.status(200).json(Data);
};
export default handler;
