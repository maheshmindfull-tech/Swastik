import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { createStrategicLead } from "./api/strategicLead.js";

function leadApi() {
  return {
    name: "strategic-lead-api",
    configureServer(server) {
      server.middlewares.use("/api/lead", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: false, message: "Method not allowed" }));
          return;
        }

        const chunks = [];
        for await (const chunk of req) chunks.push(chunk);
        let body = {};
        try {
          body = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ success: false, message: "Invalid request." }));
          return;
        }

        const result = await createStrategicLead(body);
        res.statusCode = result.status;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ success: result.success, message: result.message }));
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), leadApi()],
});
