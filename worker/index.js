import { createStrategicLead } from "../api/strategicLead.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/lead") return env.ASSETS.fetch(request);
    if (request.method !== "POST") {
      return Response.json({ success: false, message: "Method not allowed" }, { status: 405 });
    }

    let body = {};
    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const result = await createStrategicLead(body);
    return Response.json(
      { success: result.success, message: result.message },
      { status: result.status },
    );
  },
};
