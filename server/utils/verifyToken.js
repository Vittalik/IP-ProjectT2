import jwt from "jsonwebtoken";
import {db} from "../db.js";


export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("You don't have the rights to access this page!");

    jwt.verify(token, "jwtkey", (err, user) => {
        if (err) return res.status(403).json("Token is not valid!");
        req.user = user;
        next();
      });
    };

export const verifyUser = (res, req, next) => {
    verifyToken(req, res, () => {
        const q = "SELECT * users WHERE `role` = 'content_creator' ";

        db.query(q, [user.role], (err, data) => {
            if (err) return res.status(403).json("You don't have the rights to access this page!");
            return res.json("Access granted!");
    });
    })
}


    export const verifyAdmin = (req, res, next) => {
        const token = req.cookies.access_token;
        if (!token) return res.status(401).json("You don't have the rights to access this page!");
    
        jwt.verify(token, "jwtkey", (err, user) => {
            if (err) return res.status(403).json("Token is not valid!");
            req.user = user;
          });

        const q = "SELECT * users WHERE `role` = 'content_creator' ";
    
        db.query(q, [user.role], (err, data) => {
                if (err) return res.status(403).json("You don't have the rights to access this page!");
                return res.json("Access granted!");
        });
    }