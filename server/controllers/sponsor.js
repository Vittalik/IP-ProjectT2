import {db} from "../db.js";
import jwt from "jsonwebtoken";

export const getSponsors = (req,res)=>{
    const q = "SELECT * FROM sponsors";

        db.query(q, (err,data)=>{
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        })
};