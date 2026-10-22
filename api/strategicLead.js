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

function leadUrl({ name, mobile, email, when }) {
  const params = new URLSearchParams({
    actn: "SaveData",
    id: "873",
    globalvar: "0",
    cloudcode: "swastikgroup",
    idselected: "0",
    idhidden: "0",
    mobileform: "yes",
    editids: EDIT_IDS,
    field15715: mobile,
    field30754: "",
    field34785: "Pune",
    field33937: email,
    field15716: "Website enquiry. Consented to be contacted.",
    field31228: "Website",
    field31229: "Dear Pune",
    field31230: "Dear Pune — The Hidden Forest",
    field15713: name,
    state: "852",
    field15800: when,
    field31227: when,
    field15730: "The Hidden Forest",
  });
  return `${ENDPOINT}?${params.toString()}`;
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

  const when = formatIndiaDateTime(new Date());
  let response;
  try {
    response = await fetch(leadUrl({ name, mobile, email, when }), {
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
      message: "Could not save your enquiry. Please try again.",
    };
  }

  return { status: 200, success: true, message: "Saved" };
}
