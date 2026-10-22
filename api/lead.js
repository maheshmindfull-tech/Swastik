import { createStrategicLead } from "./strategicLead.js";

function readBody(body) {
  if (body && typeof body === "object") return body;
  if (typeof body === "string") {
    try {
      return JSON.parse(body);
    } catch {
      return {};
    }
  }
  return {};
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  const result = await createStrategicLead(readBody(req.body));
  return res.status(result.status).json({
    success: result.success,
    message: result.message,
  });
}
