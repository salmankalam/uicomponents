# Session Export — Yacht Booking Form + EmailJS Integration

## Date
July 20, 2026

## Project
`21st-showcase` — React + Vite + Tailwind CSS project

---

## Summary

Integrated EmailJS into the yacht booking contact form. The form collects booking details and sends them to the platform's Gmail inbox via EmailJS (no backend needed).

---

## Files Created

### 1. `emailjs-template.md`
EmailJS HTML template with instructions. Contains:
- Template variables reference
- Subject line
- HTML email body with yacht booking details table
- Step-by-step EmailJS dashboard setup guide

### 2. `.env.local`
Placeholder for EmailJS credentials (auto-ignored by git via `*.local`):
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Files Modified

### 1. `src/components/ui/contact-form.tsx`
- Rewrote the form with 6 yacht booking fields: Full Name, Yacht Name, Duration (hrs), Date, Email, Phone
- Added `emailjs.send()` call on form submit
- Added `sending` loading state and `status` (idle/success/error) state
- Date field uses a regular `<input type="date">` (SmoothInput doesn't support date)
- Form wrapped in `<form onSubmit={handleSubmit}>`
- Success/error messages displayed after submission
- Button disabled while sending

### 2. `src/components/ui/smooth-caret-input-skiperui.tsx`
Extended `SmoothInputType` from `"text" | "password"` to `"text" | "password" | "email" | "tel" | "number"`

### 3. `emailjs-template.md`
Created with the full HTML email template and setup instructions for EmailJS dashboard.

### 4. `.env.local`
Created with placeholder EmailJS credentials (auto-ignored by git).

### 5. `package.json`
Added `@emailjs/browser` dependency.

---

## How EmailJS Works

- **Sender (From):** Your Gmail connected to EmailJS as the Email Service
- **Recipient (To):** Same Gmail (set in the template's "To Email" field)
- **User's email:** Passed as `{{user_email}}` variable in the email body so you can reply

The email is sent from your Gmail → your Gmail inbox with the user's booking details in the body.

---

## Files Changed

| File | Action |
|---|---|
| `emailjs-template.md` | Created — EmailJS HTML template + setup guide |
| `.env.local` | Created — placeholder for EmailJS credentials |
| `src/components/ui/contact-form.tsx` | Rewritten — 6 yacht booking fields + EmailJS send |
| `src/components/ui/smooth-caret-input-skiperui.tsx` | Extended `SmoothInputType` to support email, tel, number |
| `package.json` | Added `@emailjs/browser` dependency |

## Form Fields

1. Full Name (text)
2. Yacht Name (text)
3. Duration in hrs (number)
4. Date (native `<input type="date">`)
5. Email (email)
6. Phone Number (tel)

## EmailJS Flow

- **Sender (From):** Your Gmail connected to EmailJS
- **Recipient (To):** Same Gmail (set in template's "To Email")
- **User's email:** Passed as `{{user_email}}` variable in the email body
