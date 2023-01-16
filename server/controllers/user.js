import {db} from "../db.js";
import jwt from "jsonwebtoken";

export const requireAuth = (req, res) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("You don't have the rights to access this page!");

    jwt.verify(token, "jwtkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");

    const q = "SELECT * users WHERE `role` = 'content_creator' ";

    db.query(q, [userInfo.role], (err, data) => {
        if (err) return res.status(403).json("You don't have the rights to access this page!");
  
        return res.json("Access granted!");
      });
    });
}