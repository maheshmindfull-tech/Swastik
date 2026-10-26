import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HIDDEN_FOREST_TAG_ID, isDearPunePath } from "./src/lib/hiddenForestTag.js";

const root = path.dirname(fileURLToPath(import.meta.url));

function snippet() {
  return `    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${HIDDEN_FOREST_TAG_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${HIDDEN_FOREST_TAG_ID}');
    </script>
    <script>
      (function () {
        if (window.__hfGuard) return;
        window.__hfGuard = true;
        var id = ${JSON.stringify(HIDDEN_FOREST_TAG_ID)};
        function campaign(path) {
          var bare = String(path || "/").split("?")[0].split("#")[0].replace(/\\/+$/, "") || "/";
          return bare === "/dear-pune" || bare.indexOf("/dear-pune/") === 0;
        }
        document.addEventListener("click", function (event) {
          if (event.defaultPrevented || event.button !== 0) return;
          if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          var target = event.target;
          var node = target && target.closest ? target.closest("a[href]") : null;
          if (!node && target && target.parentElement && target.parentElement.closest) {
            node = target.parentElement.closest("a[href]");
          }
          if (!node || (node.target && node.target !== "_self")) return;
          var url;
          try { url = new URL(node.getAttribute("href"), location.href); }
          catch (e) { return; }
          if (url.origin !== location.origin) return;
          window["ga-disable-" + id] = !campaign(url.pathname);
        }, true);
        window.addEventListener("popstate", function () {
          window["ga-disable-" + id] = !campaign(location.pathname);
        }, true);
      })();
    </script>
`;
}

export function dearPuneHtmlPath() {
  return path.join(root, "dear-pune.html");
}

export function syncDearPuneHtml() {
  const indexPath = path.join(root, "index.html");
  const targetPath = dearPuneHtmlPath();
  const index = fs.readFileSync(indexPath, "utf8");
  const next = index.includes(HIDDEN_FOREST_TAG_ID)
    ? index
    : index.replace("<head>", `<head>\n${snippet()}`);
  const current = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, "utf8") : "";
  if (current !== next) fs.writeFileSync(targetPath, next);
  return targetPath;
}

function rewriteCampaignRequest(req) {
  const raw = req.url || "/";
  const queryAt = raw.indexOf("?");
  const pathname = queryAt === -1 ? raw : raw.slice(0, queryAt);
  const query = queryAt === -1 ? "" : raw.slice(queryAt);
  if (pathname === "/dear-pune.html" || !isDearPunePath(pathname)) return;
  req.url = `/dear-pune.html${query}`;
}

export function dearPuneHtmlPlugin() {
  syncDearPuneHtml();
  return {
    name: "dear-pune-html",
    buildStart() {
      syncDearPuneHtml();
    },
    configureServer(server) {
      syncDearPuneHtml();
      server.middlewares.use((req, _res, next) => {
        rewriteCampaignRequest(req);
        next();
      });
      const onChange = (file) => {
        const normalized = String(file).replace(/\\/g, "/");
        if (normalized.endsWith("/index.html")) syncDearPuneHtml();
      };
      server.watcher.on("change", onChange);
    },
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        rewriteCampaignRequest(req);
        next();
      });
    },
  };
}
