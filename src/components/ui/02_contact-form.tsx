"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

import { SmoothInput } from "./09_smooth-caret-input-skiperui";

interface BookingFormData {
  fullName: string;
  yachtName: string;
  duration: string;
  date: string;
  email: string;
  phone: string;
}

const initialFormData: BookingFormData = {
  fullName: "",
  yachtName: "",
  duration: "",
  date: "",
  email: "",
  phone: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus("idle");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          yacht_name: formData.yachtName,
          duration: formData.duration,
          date: formData.date,
          user_email: formData.email,
          phone: formData.phone,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-6">
      <div className="space-y-4">
        <SmoothInput
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
          }
          wrapperClassName="max-w-none"
          aria-label="Full Name"
          required
        />
        <SmoothInput
          placeholder="Yacht Name"
          value={formData.yachtName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, yachtName: e.target.value }))
          }
          wrapperClassName="max-w-none"
          aria-label="Yacht Name"
          required
        />
        <SmoothInput
          type="number"
          placeholder="Duration (hrs)"
          value={formData.duration}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, duration: e.target.value }))
          }
          wrapperClassName="max-w-none"
          aria-label="Duration"
          min="1"
          required
        />
        <div className="relative w-full max-w-none rounded-2xl border border-[#e3e7ec] bg-[#f5f7fa] p-4 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-[#a855f7] dark:border-[#2b2a25] dark:bg-[#171716]">
          <input
            type="date"
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, date: e.target.value }))
            }
            className="w-full bg-transparent outline-none placeholder:text-[#646b75]/40 dark:placeholder:text-[#9a958a]/40"
            aria-label="Date"
            required
          />
        </div>
        <SmoothInput
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          wrapperClassName="max-w-none"
          aria-label="Email"
          required
        />
        <SmoothInput
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, phone: e.target.value }))
          }
          wrapperClassName="max-w-none"
          aria-label="Phone Number"
          required
        />
      </div>
      {status === "success" && (
        <p className="text-center text-sm text-green-600 dark:text-green-400">
          Booking inquiry sent! We'll get back to you shortly.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm text-red-600 dark:text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => setFormData(initialFormData)}
          className="cursor-pointer rounded-xl bg-[#f4f4f5] px-5 py-2.5 text-sm font-medium text-[#18181b] transition-all hover:bg-[#e4e4e7] active:scale-[0.97] dark:bg-[#27272a] dark:text-[#fafafa] dark:hover:bg-[#3f3f46]"
        >
          Clear
        </button>
        <button
          type="submit"
          disabled={sending}
          className="cursor-pointer rounded-xl bg-[#18181b] px-5 py-2.5 text-sm font-medium text-[#fafafa] transition-all hover:bg-[#27272a] active:scale-[0.97] disabled:opacity-50 dark:bg-[#fafafa] dark:text-[#18181b] dark:hover:bg-[#e4e4e7]"
        >
          {sending ? "Sending..." : "Submit Booking"}
        </button>
      </div>
    </form>
  );
}
