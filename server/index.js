import express from "express";
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import sponsorRoutes from "./routes/sponsors.js"
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express()

app.use(express.json())
app.use(cookieParser())


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../client/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });

const upload = multer({ storage })

app.post("/server/upload", upload.single("file"), function (req, res) {
    const file = req.file;
    try{
      res.status(200).json(file.filename);
    }catch(error){
      console.log(error);
    }
  })


app.use("/server/posts", postRoutes)
app.use("/server/auth", authRoutes)
app.use("/server/users", userRoutes)
app.use("/server/sponsors", sponsorRoutes)


app.listen(8800,()=>{
    console.log("Connected!")
})