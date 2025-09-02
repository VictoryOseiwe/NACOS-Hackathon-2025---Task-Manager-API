import env from "dotenv";
env.config();

// Hardcoded authentication token for validating incoming requests.
const AUTH_TOKEN = process.env.AUTH_TOKEN;

export default function authenticate(req, res, next) {
  // Retrieve the 'Authorization' header from the incoming request.
  const authHeader = req.headers["authorization"];

  // If the header is missing or malformed, deny access.
  if (!authHeader) {
    return res
      .status(401)
      .json({ message: "Authorization header missing or malformed" });
  }

  // Extract the token from the header (expects format: 'Bearer <token>').
  const token = authHeader.split(" ")[1];

  // If the token does not match the expected value, deny access.
  if (token !== AUTH_TOKEN) {
    return res.status(403).json({ message: "Invalid token" });
  }

  // If authentication succeeds, proceed to the next middleware or route handler.
  next();
}
