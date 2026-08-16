# EmailJS Template — Yacht Booking Platform

## Template Variables

| Variable | Description |
|---|---|
| `{{full_name}}` | Customer's full name |
| `{{yacht_name}}` | Selected yacht name |
| `{{duration}}` | Booking duration in hours |
| `{{date}}` | Booking date |
| `{{user_email}}` | Customer's email |
| `{{phone}}` | Customer's phone number |

## Template Settings (Left Sidebar)

| Field | Value |
|---|---|
| **To Email** | `your-gmail@gmail.com` (your platform's Gmail) |
| **From Name** | `{{yacht_name}} Booking Inquiry` |
| **Reply To** | `{{user_email}}` |

## Subject

```
New Booking Inquiry — {{yacht_name}} | {{full_name}} | {{date}}
```

## Body (HTML)

Paste this in the **HTML mode** of the EmailJS template editor:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
  <h2 style="color: #1a365d; border-bottom: 2px solid #1a365d; padding-bottom: 8px;">
    🚤 New Yacht Booking Inquiry
  </h2>

  <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666; width: 140px;">Full Name</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600;">{{full_name}}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">Yacht</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600;">{{yacht_name}}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">Duration</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600;">{{duration}} hrs</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">Date</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600;">{{date}}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">Email</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600;">{{user_email}}</td>
    </tr>
    <tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;">Phone</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: 600;">{{phone}}</td>
    </tr>
  </table>
  <p style="margin-top: 20px; color: #666; font-size: 13px;">
    This inquiry was submitted via the Yacht Booking Platform.
  </p>
</div>
```

## How to Use in EmailJS Dashboard

1. Go to **Email Templates** → click your template
2. In the **Content** tab, switch to **HTML** mode (toggle at top right)
3. Paste the HTML above
4. **Subject** field: `New Booking Inquiry — {{yacht_name}} | {{full_name}} | {{date}}`
5. **To Email** (left sidebar): `your-gmail@gmail.com`
6. **From Name**: `{{yacht_name}} Booking Inquiry`
7. **Reply To**: `{{user_email}}`
8. Click **Save**

## Template Variables (auto-created when you type them)

- `{{full_name}}`
- `{{yacht_name}}`
- `{{duration}}`
- `{{date}}`
- `{{user_email}}`
- `{{phone}}`
