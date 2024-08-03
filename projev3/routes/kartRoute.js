import express from 'express';
import * as kartkontrol from "../controllers/kartconroller.js"

const router = express.Router();
router.route("/").post(kartkontrol.createKart);
router.route("/").get(kartkontrol.kartgetir);

export default router;