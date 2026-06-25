import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import courseRoutes from "./routes/course.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import enquiryRoutes from "./routes/enquiry.routes.js";
import otpRoutes from "./routes/otp.routes.js";
import settingsRoutes from "./routes/settings.routes.js";

import errorHandler from "./middleware/error.middleware.js";

const app = express();

/*
|--------------------------------------------------------------------------
| Security Middleware
|--------------------------------------------------------------------------
*/

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

const allowedOrigins = [
  "http://localhost:5173",
  "https://shreecomputerskatras.in",
  "https://www.shreecomputerskatras.in",
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, curl, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/*
|--------------------------------------------------------------------------
| Global Rate Limiter
|--------------------------------------------------------------------------
*/

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Computer Institute API Running",
  });
});

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/settings",settingsRoutes);

/*
|--------------------------------------------------------------------------
| 404 Handler (Express 5 Compatible)
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/*
|--------------------------------------------------------------------------
| Global Error Handler
|--------------------------------------------------------------------------
*/

app.use(errorHandler);

export default app;