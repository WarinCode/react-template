import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const { VITE_BACKEND_PORT, VITE_FRONTEND_PORT } = process.env;

app.get("/", (req, res) => res.send("Hello Express"));

app.post("/api/sentData" , (req , res) => {
  console.log(req.body);
  res.status(200).redirect("http://localhost:".concat(VITE_FRONTEND_PORT))
})

app.listen(parseInt(VITE_BACKEND_PORT), () =>
  console.log("server started on port :", VITE_BACKEND_PORT)
);
