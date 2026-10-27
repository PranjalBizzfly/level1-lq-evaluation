// Shared between the client form and the API route so both validate identically.

export const GOALS = [
  "Greater professional recognition",
  "Stronger industry authority",
  "More business and investment opportunities",
  "Speaking, advisory or leadership opportunities",
  "Building a lasting professional legacy",
  "Understanding my current personal brand",
] as const;

export type LqFields = {
  fullName: string;
  title: string;
  company: string;
  email: string;
  mobile: string;
  linkedin: string;
  goal: string;
};

export type LqErrors = Partial<Record<keyof LqFields, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s().-]{7,20}$/;
const LINKEDIN_RE = /^(https?:\/\/)?([a-z]{2,3}\.)?linkedin\.com\/\S+$/i;

export function validateLq(f: LqFields): LqErrors {
  const e: LqErrors = {};
  if (!f.fullName.trim()) e.fullName = "Please enter your full name.";
  if (!f.title.trim()) e.title = "Please enter your professional title.";
  if (!f.company.trim()) e.company = "Please enter your company or organization.";
  if (!f.email.trim()) e.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Please enter a valid email address.";
  if (f.mobile.trim() && !PHONE_RE.test(f.mobile.trim())) e.mobile = "Please enter a valid mobile number.";
  if (f.linkedin.trim() && !LINKEDIN_RE.test(f.linkedin.trim()))
    e.linkedin = "Please enter a valid LinkedIn profile URL.";
  if (f.goal && !(GOALS as readonly string[]).includes(f.goal)) e.goal = "Please select one of the listed goals.";
  for (const [k, v] of Object.entries(f)) {
    if (typeof v !== "string" || v.length > 500) e[k as keyof LqFields] = "This entry is too long.";
  }
  return e;
}
