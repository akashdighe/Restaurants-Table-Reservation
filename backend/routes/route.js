import express from "express";
import reservationRoute from "../routes/reservationRoute.js";
import authRouter from "./authRoute.js";

const route = express.Router();

route.use("/reservation", reservationRoute);
route.use("/auth", authRouter);

export default route;
