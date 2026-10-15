const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;

export async function submitLead(fields) {
  if (!SHEET_URL) {
    throw new Error("VITE_GOOGLE_SHEET_URL is not set");
  }

  const body = new URLSearchParams({
    ...fields,
    page: window.location.href,
    submittedAt: new Date().toISOString(),
  });

  // Apps Script web apps don't send CORS headers, so the response is opaque.
  await fetch(SHEET_URL, { method: "POST", mode: "no-cors", body });
}
