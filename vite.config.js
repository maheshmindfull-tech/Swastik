import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { createStrategicLead } from "./api/strategicLead.js";
import { dearPuneHtmlPath, dearPuneHtmlPlugin } from "./vite.dearPuneHtml.js";

const root = path.dirname(fileURLToPath(import.meta.url));

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

        const raw = await new Promise((resolve, reject) => {
          const chunks = [];
          req.on("data", (chunk) => chunks.push(chunk));
          req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
          req.on("error", reject);
        });
        let body = {};
        try {
          body = JSON.parse(raw || "{}");
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
  plugins: [react(), tailwindcss(), leadApi(), dearPuneHtmlPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: path.join(root, "index.html"),
        dearPune: dearPuneHtmlPath(),
      },
    },
  },
});
