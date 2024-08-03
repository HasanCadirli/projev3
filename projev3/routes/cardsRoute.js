import express from 'express';
import * as sayfakontrol from "../controllers/sayfakontrol.js"

const router = express.Router();
router.route("/").get(sayfakontrol.getIndexPage);
export default router;