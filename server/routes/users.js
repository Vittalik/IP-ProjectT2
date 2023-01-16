import express from "express"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

//import { addPost } from "../controllers/post.js"

const router = express.Router()

router.get("/checkuser", verifyToken);
router.get("/admin", verifyAdmin)

//router.get("/test", addPost)

export default router