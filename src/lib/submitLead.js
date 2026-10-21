const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL;
const NOTIFY_EMAIL = "swastikrealtygroup0711@gmail.com";

export async function submitLead(fields) {
  const payload = {
    name: fields.name || "",
    mobile: fields.mobile || "",
    email: fields.email || "Not provided",
    consent: fields.consent === "true" ? "Yes" : "No",
    form: fields.source || "",
    page: window.location.href,
    _subject: `The Hidden Forest — new enquiry from ${fields.name || "website"}`,
    _template: "table",
    _captcha: "false",
  };

  if (fields.email) payload._replyto = fields.email;

  const response = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(NOTIFY_EMAIL)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    },
  );

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  const delivered = response.ok && (data.success === true || data.success === "true");
  if (!delivered) {
    const detail = typeof data.message === "string" ? data.message : "";
    if (/activation/i.test(detail)) {
      throw new Error(
        "One-time email activation is still pending. Open swastikrealtygroup0711@gmail.com, click Activate Form, then submit again.",
      );
    }
    throw new Error(detail || "Could not send your details. Please try again.");
  }

  if (SHEET_URL) {
    const body = new URLSearchParams({
      ...fields,
      page: window.location.href,
      submittedAt: new Date().toISOString(),
    });
    try {
      await fetch(SHEET_URL, { method: "POST", mode: "no-cors", body });
    } catch {
      // The enquiry email has already been sent.
    }
  }
}
