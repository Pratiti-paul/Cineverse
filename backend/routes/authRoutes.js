// import express from "express";
// import { signup, login } from "../controllers/authController.js";
// import { verifyToken } from "../middlewares/authMiddleware.js";

// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);

// // ✅ Protected route to test JWT
// router.get("/me", verifyToken, (req, res) => {
//   res.json({
//     message: "Token verified!",
//     user: req.user
//   });
// });

// export default router;

import express from "express";
import { signup, login } from "../controllers/authController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// ✅ Add this route to test JWT
router.get("/me", verifyToken, (req, res) => {
  res.json({
    message: "Token verified!",
    user: req.user
  });
});

export default router;
