import express from "express"
import { addSponsor, deleteSponsor, getSponsors, updateSponsor } from "../controllers/sponsor.js";

//import { addPost } from "../controllers/post.js"
const router = express.Router()


router.get("/", getSponsors);
router.post("/spon", addSponsor)
router.delete("/:id", deleteSponsor)
router.put("/:id", updateSponsor)

export default router