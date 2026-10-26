export const HIDDEN_FOREST_TAG_ID = "G-XX7KHE80YK";

const TAG_SRC = `https://www.googletagmanager.com/gtag/js?id=${HIDDEN_FOREST_TAG_ID}`;

export function isDearPunePath(pathname) {
  const bare = String(pathname || "/")
    .split("?")[0]
    .split("#")[0]
    .replace(/\/+$/, "") || "/";
  return bare === "/dear-pune" || bare.startsWith("/dear-pune/");
}

function disableFlag(disabled) {
  window[`ga-disable-${HIDDEN_FOREST_TAG_ID}`] = disabled;
}

function tagState() {
  if (!window.__hfTagState) window.__hfTagState = { seen: false, lastPath: "" };
  return window.__hfTagState;
}

export function installHiddenForestGuard() {
  if (typeof document === "undefined" || window.__hfGuard) return;
  window.__hfGuard = true;

  document.addEventListener(
    "click",
    (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target;
      const node =
        target && target.closest
          ? target.closest("a[href]")
          : target?.parentElement?.closest?.("a[href]");
      if (!node || (node.target && node.target !== "_self")) return;
      let url;
      try {
        url = new URL(node.getAttribute("href"), window.location.href);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      disableFlag(!isDearPunePath(url.pathname));
    },
    true,
  );

  window.addEventListener(
    "popstate",
    () => {
      disableFlag(!isDearPunePath(window.location.pathname));
    },
    true,
  );
}

export function syncHiddenForestTag(pathname) {
  installHiddenForestGuard();
  const campaign = isDearPunePath(pathname);
  disableFlag(!campaign);
  const state = tagState();
  if (!campaign) {
    state.lastPath = "";
    return;
  }

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }

  const present = Boolean(document.querySelector(`script[src="${TAG_SRC}"]`));
  if (!present) {
    const script = document.createElement("script");
    script.async = true;
    script.src = TAG_SRC;
    document.head.appendChild(script);
    window.gtag("js", new Date());
    window.gtag("config", HIDDEN_FOREST_TAG_ID);
    state.seen = true;
    state.lastPath = pathname;
    return;
  }

  if (!state.seen) {
    state.seen = true;
    state.lastPath = pathname;
    return;
  }

  if (state.lastPath === pathname) return;
  state.lastPath = pathname;
  window.gtag("config", HIDDEN_FOREST_TAG_ID, {
    page_path: `${window.location.pathname}${window.location.search}`,
    page_location: window.location.href,
    page_title: document.title,
  });
}

installHiddenForestGuard();
