import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { VITE_BACKEND_PORT } = process.env;

app.get("/", (req, res) => res.send("Hello Express"));
app.get("/api/sentData", (req, res) => {
  const { firstname, lastname } = req.query;
  res
    .type("text")
    .status(200)
    .send(
      `สวัสดีคุณ ${firstname} ${lastname} เราได้ทำการบันทึกข้อความของคุณเรียบร้อยแล้ว`
    );
});

app.listen(parseInt(VITE_BACKEND_PORT), () =>
  console.log("server started on port :", VITE_BACKEND_PORT)
);
