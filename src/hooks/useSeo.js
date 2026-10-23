import { useEffect } from "react";
import { SITE_URL, absoluteUrl } from "../seo";

function upsert(selector, create) {
  let node = document.head.querySelector(selector);
  const existed = Boolean(node);
  const previous = node ? node.getAttribute("content") ?? node.getAttribute("href") : null;
  if (!node) {
    node = create();
    document.head.appendChild(node);
  }
  return { node, existed, previous };
}

function imageUrl(image) {
  if (!image) return `${SITE_URL}/logo.png`;
  try {
    return new URL(image, SITE_URL).href;
  } catch {
    return `${SITE_URL}/logo.png`;
  }
}

export default function useSeo({
  title,
  description,
  keywords,
  image,
  path,
  robots = "index, follow",
  jsonLd,
  type = "website",
}) {
  const structured = JSON.stringify(jsonLd ?? null);
  const keywordText = Array.isArray(keywords) ? keywords.join(", ") : keywords || "";

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    document.documentElement.lang = "en-IN";

    const url = absoluteUrl(path ?? window.location.pathname);
    const shareImage = imageUrl(image);

    const metas = [
      ["name", "description", description],
      ["name", "keywords", keywordText],
      ["name", "robots", robots],
      ["name", "author", "Swastik Realty Group"],
      ["name", "geo.region", "IN-MH"],
      ["name", "geo.placename", "Pune"],
      ["name", "geo.position", "18.6353277;73.7989228"],
      ["name", "ICBM", "18.6353277, 73.7989228"],
      ["property", "og:type", type],
      ["property", "og:locale", "en_IN"],
      ["property", "og:site_name", "Swastik Realty Group"],
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:url", url],
      ["property", "og:image", shareImage],
      ["name", "twitter:card", "summary_large_image"],
      ["name", "twitter:title", title],
      ["name", "twitter:description", description],
      ["name", "twitter:image", shareImage],
    ].filter(([, , content]) => content);

    const applied = metas.map(([attr, key, content]) => {
      const entry = upsert(`meta[${attr}="${key}"]`, () => {
        const meta = document.createElement("meta");
        meta.setAttribute(attr, key);
        return meta;
      });
      entry.node.setAttribute("content", content);
      return entry;
    });

    const canonical = upsert('link[rel="canonical"]', () => {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      return link;
    });
    canonical.node.setAttribute("href", url);

    const data = JSON.parse(structured);
    let script = document.head.querySelector("script#seo-jsonld");
    const scriptExisted = Boolean(script);
    const previousScript = script ? script.textContent : "";
    if (data) {
      if (!script) {
        script = document.createElement("script");
        script.id = "seo-jsonld";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    } else if (script) {
      script.remove();
    }

    return () => {
      document.title = previousTitle;
      [...applied, canonical].forEach(({ node, existed, previous }) => {
        if (!existed) node.remove();
        else if (node.tagName === "LINK") node.setAttribute("href", previous ?? "");
        else if (previous == null) node.remove();
        else node.setAttribute("content", previous);
      });
      const current = document.head.querySelector("script#seo-jsonld");
      if (!data) return;
      if (!scriptExisted && current) current.remove();
      else if (current && scriptExisted) current.textContent = previousScript;
    };
  }, [title, description, keywordText, image, path, robots, structured, type]);
}

export { SITE_URL };
