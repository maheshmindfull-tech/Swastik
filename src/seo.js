export const SITE_URL = "https://swastikrealtygroup.com";

export const brandKeywords = [
  "Swastik Realty Group",
  "flats in Pune",
  "homes in Pimpri-Chinchwad",
  "residential projects in Pune",
  "real estate developer in Pune",
  "2 BHK 3 BHK 4 BHK Pune",
  "Prism City Charholi",
];

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function clip(text, max = 158) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const boundary = cut.lastIndexOf(" ");
  return `${(boundary > 80 ? cut.slice(0, boundary) : cut).trim()}…`;
}

const organization = {
  "@type": ["RealEstateAgent", "Organization"],
  "@id": `${SITE_URL}/#organization`,
  name: "Swastik Realty Group",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: ["+912066662246", "+917770004505", "+917770004044"],
  email: "sales@srgpune.in",
  foundingDate: "1998",
  address: {
    "@type": "PostalAddress",
    streetAddress: "T-3, 4th Floor, KWT, Office No. 406 and 407, Old Mumbai-Pune Highway",
    addressLocality: "Pimpri-Chinchwad",
    addressRegion: "Maharashtra",
    postalCode: "411018",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.6353277,
    longitude: 73.7989228,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:30",
    closes: "18:00",
  },
  areaServed: ["Pune", "Pimpri-Chinchwad", "Charholi", "Bhosari", "Chikhali", "Moshi", "Nigdi", "Wakad", "Akurdi"],
  sameAs: [
    "https://www.youtube.com/@SwastikRealtyGroup",
    "https://www.facebook.com/share/1GBLN3xm5H/?mibextid=wwXIfr",
    "https://www.instagram.com/swastikrealtygroup/",
    "https://www.linkedin.com/company/swastikk-realty-group/",
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Swastik Realty Group",
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

function breadcrumbNode(path, crumbs) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function pageGraph({ path, title, description, crumbs, extra = [], includeWebsite = false }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      ...(includeWebsite ? [website] : []),
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
        ...(crumbs ? { breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` } } : {}),
      },
      ...(crumbs ? [breadcrumbNode(path, crumbs)] : []),
      ...extra,
    ],
  };
}

const homeTitle = "Swastik Realty Group | Flats and Homes in Pune";
const homeDescription =
  "Swastik Realty Group builds residential flats and homes across Pune and Pimpri-Chinchwad, including Prism City, Swastik Vyom, and 26 years of completed projects.";

export const homeSeo = {
  title: homeTitle,
  description: homeDescription,
  keywords: brandKeywords,
  path: "/",
  jsonLd: pageGraph({
    path: "/",
    title: homeTitle,
    description: homeDescription,
    includeWebsite: true,
  }),
};

const aboutTitle = "About Swastik Realty Group | Pune Real Estate";
const aboutDescription =
  "Meet Swastik Realty Group, a Pune developer since 1998. See our vision, milestones, leadership, and residential work across Pimpri-Chinchwad.";

export const aboutSeo = {
  title: aboutTitle,
  description: aboutDescription,
  keywords: ["about Swastik Realty Group", "Pune real estate developer", "Swastik Group since 1998", ...brandKeywords],
  path: "/about",
  jsonLd: pageGraph({
    path: "/about",
    title: aboutTitle,
    description: aboutDescription,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ],
  }),
};

const projectsTitle = "Residential Projects in Pune | Swastik Realty";
const projectsDescription =
  "Browse ongoing, completed, and upcoming Swastik Realty Group projects in Charholi, Nigdi, Bhosari, Chikhali, Moshi, and Wakad.";

export const projectsSeo = {
  title: projectsTitle,
  description: projectsDescription,
  keywords: ["Swastik projects Pune", "ongoing projects in Pune", "completed projects Pimpri-Chinchwad", ...brandKeywords],
  path: "/projects",
  jsonLd: pageGraph({
    path: "/projects",
    title: projectsTitle,
    description: projectsDescription,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ],
  }),
};

export function projectsSeoWithList(projects) {
  const listed = projects.filter((project) => project.id);
  return {
    ...projectsSeo,
    jsonLd: pageGraph({
      path: "/projects",
      title: projectsTitle,
      description: projectsDescription,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
      ],
      extra: [
        {
          "@type": "ItemList",
          name: "Swastik Realty Group projects",
          itemListElement: listed.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            url: absoluteUrl(`/projects/${project.id}`),
          })),
        },
      ],
    }),
  };
}

const galleryTitle = "Project Gallery | Swastik Realty Group Pune";
const galleryDescription =
  "Photos from Swastik Realty Group projects and events in Pune, including launches, possessions, safety week, and team gatherings.";

export const gallerySeo = {
  title: galleryTitle,
  description: galleryDescription,
  keywords: ["Swastik Realty gallery", "Pune project photos", "Prism City photos", ...brandKeywords],
  path: "/gallery",
  jsonLd: pageGraph({
    path: "/gallery",
    title: galleryTitle,
    description: galleryDescription,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Gallery", path: "/gallery" },
    ],
  }),
};

const careerTitle = "Careers at Swastik Realty Group | Jobs in Pune";
const careerDescription =
  "Join Swastik Realty Group in Pune. Open roles include Sourcing Manager, Sales Executive, Pre Sales Executive, and Estimation Engineer.";

export const careerSeo = {
  title: careerTitle,
  description: careerDescription,
  keywords: ["Swastik Realty careers", "real estate jobs in Pune", "sales jobs Pimpri-Chinchwad", ...brandKeywords],
  path: "/career",
  jsonLd: pageGraph({
    path: "/career",
    title: careerTitle,
    description: careerDescription,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Career", path: "/career" },
    ],
  }),
};

const contactTitle = "Contact Swastik Realty Group | Pimpri-Chinchwad";
const contactDescription =
  "Call, email, or visit Swastik Realty Group at KWT, Old Mumbai-Pune Highway, Pimpri-Chinchwad. Sales: +91 7770004505.";

export const contactSeo = {
  title: contactTitle,
  description: contactDescription,
  keywords: ["contact Swastik Realty", "Swastik office Pimpri-Chinchwad", "sales@srgpune.in", ...brandKeywords],
  path: "/contact",
  jsonLd: pageGraph({
    path: "/contact",
    title: contactTitle,
    description: contactDescription,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
  }),
};

function legalSeo(path, name, description) {
  return {
    title: `${name} | Swastik Realty Group`,
    description,
    keywords: [name, "Swastik Realty Group", "Pune"],
    path,
    jsonLd: pageGraph({
      path,
      title: `${name} | Swastik Realty Group`,
      description,
      crumbs: [
        { name: "Home", path: "/" },
        { name, path },
      ],
    }),
  };
}

export const privacySeo = legalSeo(
  "/privacy-policy",
  "Privacy Policy",
  "Privacy policy for Swastik Realty Group, a residential developer in Pune and Pimpri-Chinchwad.",
);

export const disclaimerSeo = legalSeo(
  "/disclaimer",
  "Disclaimer",
  "Disclaimer for the Swastik Realty Group website and the project information published for Pune homebuyers.",
);

export const termsSeo = legalSeo(
  "/terms-and-conditions",
  "Terms and Conditions",
  "Terms and conditions for using the Swastik Realty Group website and enquiring about homes in Pune.",
);

export function projectSeo(project, place = "Pune") {
  const locality = place.split(",")[0].trim() || "Pune";
  const title = `${project.name} in ${locality} | Swastik Realty`;
  const generic = "Discover our portfolio of exceptional properties that redefine luxury living";
  const source = project.highlightsDesc || project.desc || "";
  const description = clip(
    source.includes(generic) && project.highlightsDesc ? project.highlightsDesc : source || `${project.name} by Swastik Realty Group in ${place}.`,
  );
  const path = `/projects/${project.id}`;
  return {
    title,
    description,
    keywords: [project.name, `flats in ${locality}`, `${locality} Pune`, "Swastik Realty Group", ...brandKeywords.slice(0, 4)],
    path,
    jsonLd: pageGraph({
      path,
      title,
      description,
      crumbs: [
        { name: "Home", path: "/" },
        { name: "Projects", path: "/projects" },
        { name: project.name, path },
      ],
      extra: [
        {
          "@type": "ApartmentComplex",
          name: project.name,
          description,
          url: absoluteUrl(path),
          address: {
            "@type": "PostalAddress",
            addressLocality: locality,
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          brand: { "@id": `${SITE_URL}/#organization` },
        },
      ],
    }),
  };
}
