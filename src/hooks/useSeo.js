import { useEffect } from "react";

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

export default function useSeo({ title, description, keywords, image, path, robots = "index, follow" }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const url = `${window.location.origin}${path ?? window.location.pathname}`;
    const imageUrl = image ? new URL(image, window.location.origin).href : undefined;

    const metas = [
      ["name", "description", description],
      ["name", "keywords", keywords?.join(", ")],
      ["name", "robots", robots],
      ["property", "og:type", "website"],
      ["property", "og:site_name", "Swastik Realty Group"],
      ["property", "og:title", title],
      ["property", "og:description", description],
      ["property", "og:url", url],
      ["property", "og:image", imageUrl],
      ["name", "twitter:card", imageUrl ? "summary_large_image" : "summary"],
      ["name", "twitter:title", title],
      ["name", "twitter:description", description],
      ["name", "twitter:image", imageUrl],
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

    return () => {
      document.title = previousTitle;
      [...applied, canonical].forEach(({ node, existed, previous }) => {
        if (!existed) node.remove();
        else if (node.tagName === "LINK") node.setAttribute("href", previous);
        else node.setAttribute("content", previous);
      });
    };
  }, [title, description, keywords, image, path, robots]);
}
