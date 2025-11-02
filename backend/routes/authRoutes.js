import express from "express";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


router.get("/me", verifyToken, (req, res) => {
  res.json({ message: "Token verified!", user: req.user });
});

export default router;
