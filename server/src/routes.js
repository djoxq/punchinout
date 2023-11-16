import express from "express";
import { saveController } from "./controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.json({
    status: "success",
  });
});

router.post("/save", (req, res) => {
  return saveController(req, res);
});

export default router;
