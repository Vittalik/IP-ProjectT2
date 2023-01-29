import express from "express"
import { getSponsors } from "../controllers/sponsor.js";

//import { addPost } from "../controllers/post.js"

const router = express.Router()

router.get("/", getSponsors);
//router.get("/admin", verifyAdmin)

//router.get("/test", addPost)

export default router