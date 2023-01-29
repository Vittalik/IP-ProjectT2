import {db} from "../db.js";
import jwt from "jsonwebtoken";

export const getUsers = (req,res)=>{
    const q = "SELECT * FROM users WHERE role != 'admin'";

        db.query(q, (err,data)=>{
            if (err) return res.status(500).send(err);
            return res.status(200).json(data);
        })
};

export const deleteUser = (req,res)=>{
    const userId = req.params.id;
    const q = "DELETE FROM users WHERE `id` = ?";

    db.query(q, [userId], (err, data) => {
      if (err) return res.status(403).json("USER_ERROR");
      return res.json("User has been deleted!");
    });
};