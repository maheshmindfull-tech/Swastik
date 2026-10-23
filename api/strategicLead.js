const ENDPOINT = "https://26.strategicerpcloud.com/strategicerp/SaveFormField.do";

const EDIT_IDS =
  "15715/15800/31227/15730/state//31228/31229/31230/33937/15713/30754/34785/15716/";

function formatIndiaDateTime(date) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const value = (type) => parts.find((part) => part.type === type)?.value ?? "";
  return `${value("year")}-${value("month")}-${value("day")} ${value("hour")}:${value("minute")}:${value("second")}`;
}

function leadUrl(fields) {
  const params = new URLSearchParams({
    actn: "SaveData",
    id: "873",
    globalvar: "0",
    cloudcode: "swastikgroup",
    idselected: "0",
    idhidden: "0",
    mobileform: "yes",
    editids: EDIT_IDS,
    field15715: fields.mobile,
    field30754: fields.company,
    field34785: fields.location,
    field33937: fields.email,
    field15716: fields.comments,
    field31228: fields.source,
    field31229: fields.sourceName,
    field31230: fields.sourceDescription,
    field15713: fields.name,
    state: "852",
    field15800: fields.when,
    field31227: fields.when,
    field15730: fields.project,
  });
  return `${ENDPOINT}?${params.toString()}`;
}

async function saveLead(fields) {
  let response;
  try {
    response = await fetch(leadUrl({ ...fields, when: formatIndiaDateTime(new Date()) }), {
      method: "GET",
      headers: { Accept: "text/html,application/json,text/plain,*/*" },
      redirect: "follow",
    });
  } catch {
    return {
      status: 502,
      success: false,
      message: "Could not reach the enquiry system. Please try again.",
    };
  }

  const body = await response.text();
  if (!response.ok || failedSave(body)) {
    console.error("StrategicERP lead save failed", response.status, body.slice(0, 240));
    return {
      status: 502,
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }

  return { status: 200, success: true, message: "Saved" };
}

function failedSave(body) {
  const reference = body.match(/Reference:(\d+)/)?.[1];
  if (reference === "0") return true;
  const text = body.toLowerCase();
  return (
    text.includes("alert(\"error") ||
    text.includes("exception") ||
    text.includes("not valid") ||
    text.includes("access denied") ||
    text.includes("\"success\":false") ||
    text.includes("error occurred")
  );
}

export async function createStrategicLead(input) {
  if (input?.form === "contact") return createContactLead(input);

  const name = String(input?.name ?? "")
    .trim()
    .replace(/\s+/g, " ");
  const mobile = String(input?.mobile ?? "").replace(/\D/g, "");
  const email = String(input?.email ?? "").trim();
  const consent = input?.consent === true || input?.consent === "true";

  if (!name || name.length > 80) {
    return { status: 400, success: false, message: "Please enter your name." };
  }
  if (!/^[6-9]\d{9}$/.test(mobile)) {
    return { status: 400, success: false, message: "Enter a valid 10-digit mobile number." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    return { status: 400, success: false, message: "Enter a valid email address." };
  }
  if (!consent) {
    return { status: 400, success: false, message: "Please tick the box to agree to be contacted." };
  }

  const saved = await saveLead({
    name,
    mobile,
    email,
    company: "",
    location: "Pune",
    comments: "Website enquiry. Consented to be contacted.",
    source: "Website",
    sourceName: "Website The Hidden Forest",
    sourceDescription: "/ Website The Hidden Forest / 01/10/2026 / 31/03/2027",
    project: "Swastik Vantara",
  });
  if (!saved.success && saved.message === "Something went wrong. Please try again.") {
    return { ...saved, message: "Could not save your enquiry. Please try again." };
  }
  return saved;
}

function clean(value, max) {
  return String(value ?? "").trim().replace(/\s+/g, " ").slice(0, max);
}

export async function createContactLead(input) {
  const firstName = clean(input?.firstName, 40);
  const lastName = clean(input?.lastName, 40);
  const email = clean(input?.email, 120);
  const phone = String(input?.phone ?? "").replace(/\D/g, "").slice(0, 10);
  const subject = clean(input?.subject, 120);
  const message = String(input?.message ?? "").trim().slice(0, 1000);

  if (!firstName || !lastName) {
    return { status: 400, success: false, message: "Something went wrong. Please try again." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 400, success: false, message: "Something went wrong. Please try again." };
  }
  if (!subject || !message) {
    return { status: 400, success: false, message: "Something went wrong. Please try again." };
  }
  if (phone && !/^\d{1,10}$/.test(phone)) {
    return { status: 400, success: false, message: "Something went wrong. Please try again." };
  }

  const saved = await saveLead({
    name: `${firstName} ${lastName}`,
    mobile: phone,
    email,
    company: subject,
    location: "",
    comments: message,
    source: "Website",
    sourceName: "SRG Website",
    sourceDescription: "/ SRG Website /",
    project: "Prism City-Skylife",
  });
  if (saved.success) {
    return { status: 200, success: true, message: "Message sent successfully!" };
  }
  return saved;
}
