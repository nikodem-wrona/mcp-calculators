import { NextFunction, Request, Response } from "express";

export const checkApiKey = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const apiKey = req.headers["x-api-key"];
  const apiKeys = process.env.API_KEY?.split(",") || [];

  if (typeof apiKey !== "string" || !apiKeys.includes(apiKey)) {
    return res.status(401).send("Unauthorized");
  }

  next();
};
