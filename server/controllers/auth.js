import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = (req,res)=>{
    //Validarea user existent
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");

        if(req.body.password != req.body.repeatpassword){
            if (err) return res.json(err);
            return res.status(409).json("Passwords don't match!");
        } else if(req.body.password.length < 8){
            if (err) return res.json(err);
            return res.status(409).json("Password is not long enough!");
        } else if(req.body.password.search(/[a-z]/) < 0 || req.body.password.search(/[A-Z]/) < 0){
            if (err) return res.json(err);
            //return res.status(409).json("Password must contain an upper and lowercase letter!");
            return res.status(409).json("" + req.body.password + " " + req.body.repeatpassword);
        } else if (req.body.ccontent != "on") {

        // Encriptarea parolei
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`,`role`) VALUES (?)";

        const values = [
            req.body.username,
            req.body.email,
            hash,
            'user',
        ]

        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("User has been created.");
        });
    } else if (req.body.ccontent == "on") {
        // Encriptarea parolei
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`,`role`) VALUES (?)";

        const values = [
            req.body.username,
            req.body.email,
            hash,
            'content_creator',
        ]

        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Content creator has been created.");
        });
    } else return res.status(400).json(err + " | " + req.body.ccontent);
    });
};




export const login = (req,res)=>{
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err,data)=>{
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        //verificarea parolei
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isPasswordCorrect) return res.status(400).json("Wrong username or password!")
    
        const token = jwt.sign({id:data[0].id}, "jwtkey");
        const {password, ...other} = data[0];

        res.cookie("access_token", token, {
            httpOnly:true
        })
        .status(200)
        .json(other);
    
        //res.send(token);
    })

};




export const logout = (req,res)=>{
    res.clearCookie("access_token", {
        sameSite:"none",
        secure:true
    }).status(200).json("User has been logged out")
}