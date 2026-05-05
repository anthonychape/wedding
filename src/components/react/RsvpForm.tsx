import { useState } from "react";
import { z } from "zod";
import { getSupabase } from "@/lib/supabase";

interface RsvpFormProps {
  labels: {
    rsvpTitle: string;
    rsvpDeadline: string;
    nameLabel: string;
    namePlaceholder: string;
    coAttendeesLabel: string;
    coAttendeesNote: string;
    coAttendeePlaceholder: string;
    guestSideLabel: string;
    groomGuest: string;
    brideGuest: string;
    phoneLabel: string;
    phonePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    postalCodeLabel: string;
    postalCodePlaceholder: string;
    addressLabel: string;
    addressPlaceholder: string;
    attendanceLabel: string;
    attending: string;
    notAttending: string;
    guestCountLabel: string;
    dietaryLabel: string;
    dietaryNote: string;
    dietaryPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submit: string;
    submitting: string;
    thankYouTitle: string;
    thankYouMessage: string;
    thankYouNotAttending: string;
    errorMessage: string;
    nameRequired: string;
    attendanceRequired: string;
    phoneRequired: string;
    guestSideRequired: string;
    requiredLabel: string;
  };
}

const rsvpSchema = z.object({
  name: z.string().min(1),
  co_attendees: z.string().optional(),
  guest_side: z.string().optional(),
  phone: z.string().min(1),
  email: z.string().email().optional().or(z.literal("")),
  postal_code: z.string().optional(),
  address: z.string().optional(),
  attending: z.boolean(),
  guest_count: z.number().int().min(1).max(10).optional(),
  dietary_restrictions: z.string().optional(),
  message: z.string().optional(),
});

type FormState = "idle" | "submitting" | "success" | "error";

export default function RsvpForm({ labels }: RsvpFormProps) {
  const [name, setName] = useState("");
  const [coAttendees, setCoAttendees] = useState(["", "", "", ""]);
  const [guestSide, setGuestSide] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address, setAddress] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guestCount, setGuestCount] = useState(1);
  const [dietary, setDietary] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate
    const validationErrors: Record<string, string> = {};
    if (!name.trim()) validationErrors.name = labels.nameRequired;
    if (attending === null) validationErrors.attending = labels.attendanceRequired;
    if (!phone.trim()) validationErrors.phone = labels.phoneRequired;
    if (!guestSide) validationErrors.guestSide = labels.guestSideRequired;

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const coAttendeeStr = coAttendees.filter((c) => c.trim()).join(", ");

    const data = {
      name: name.trim(),
      co_attendees: coAttendeeStr || undefined,
      guest_side: guestSide || undefined,
      phone: phone.trim(),
      email: email.trim() || undefined,
      postal_code: postalCode.trim() || undefined,
      address: address.trim() || undefined,
      attending: attending!,
      guest_count: attending ? guestCount : 1,
      dietary_restrictions: attending ? dietary.trim() || undefined : undefined,
      message: message.trim() || undefined,
    };

    const result = rsvpSchema.safeParse(data);
    if (!result.success) {
      setErrors({ form: labels.errorMessage });
      return;
    }

    setFormState("submitting");

    try {
      const { error } = await getSupabase().from("rsvps").insert(result.data);
      if (error) throw error;
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <section id="rsvp" className="py-8 md:py-12 px-6">
        <div className="max-w-lg mx-auto text-center thank-you-animate">
          <div className="text-4xl mb-6">💌</div>
          <h2
            className="text-2xl font-light mb-4"
            style={{ fontFamily: "var(--font-serif-latin)" }}
          >
            {labels.thankYouTitle}
          </h2>
          <p className="text-sm opacity-70">
            {attending ? labels.thankYouMessage : labels.thankYouNotAttending}
          </p>
        </div>
      </section>
    );
  }

  const requiredBadge = (
    <span
      className="inline-block text-[10px] tracking-wider ml-2 px-1.5 py-0.5 rounded-sm align-middle"
      style={{ backgroundColor: "var(--color-gold)", color: "var(--color-ivory)" }}
    >
      {labels.requiredLabel}
    </span>
  );

  const fieldCard = "border-b border-[var(--color-gold-light)] py-6";
  const fieldLabel = "text-sm font-bold text-center mb-4";
  const inputClass =
    "w-full px-4 py-3 bg-white/50 border border-[var(--color-gold-light)] rounded text-sm placeholder:text-[var(--color-charcoal)]/70 focus:outline-2 focus:outline-[var(--color-gold)] focus:outline-offset-1 transition-colors";

  return (
    <section id="rsvp" className="py-8 md:py-12 px-6">
      <div className="max-w-lg mx-auto">
        <h2
          className="text-xl md:text-2xl tracking-[0.2em] font-bold uppercase mb-6 text-center"
          style={{ fontFamily: "var(--font-serif-latin)", color: "var(--color-gold)" }}
        >
          {labels.rsvpTitle}
        </h2>
        <p className="text-xs text-center opacity-50 mb-10">{labels.rsvpDeadline}</p>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="border border-[var(--color-gold-light)] bg-white rounded-lg overflow-hidden"
        >
          {/* ── Attendance ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.attendanceLabel}{requiredBadge}
            </div>
            <div className="flex justify-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <span
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors"
                  style={{
                    borderColor: attending === true ? "var(--color-gold)" : "var(--color-gold-light)",
                  }}
                >
                  {attending === true && (
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    />
                  )}
                </span>
                <input
                  type="radio"
                  name="attending"
                  className="sr-only"
                  checked={attending === true}
                  onChange={() => setAttending(true)}
                />
                <span className="text-sm">{labels.attending}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <span
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors"
                  style={{
                    borderColor: attending === false ? "var(--color-charcoal)" : "var(--color-gold-light)",
                  }}
                >
                  {attending === false && (
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "var(--color-charcoal)" }}
                    />
                  )}
                </span>
                <input
                  type="radio"
                  name="attending"
                  className="sr-only"
                  checked={attending === false}
                  onChange={() => setAttending(false)}
                />
                <span className="text-sm">{labels.notAttending}</span>
              </label>
            </div>
            {errors.attending && (
              <p className="text-xs text-center mt-2" style={{ color: "#c44" }}>{errors.attending}</p>
            )}
          </div>

          {/* ── Name ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.nameLabel}{requiredBadge}
            </div>
            <div className="px-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={labels.namePlaceholder}
                className={inputClass}
                required
              />
            </div>
            {errors.name && (
              <p className="text-xs text-center mt-2" style={{ color: "#c44" }}>{errors.name}</p>
            )}
          </div>

          {/* ── Co-attendees ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.coAttendeesLabel}
            </div>
            <p className="text-[11px] text-center opacity-60 mb-3">{labels.coAttendeesNote}</p>
            <div className="px-6 space-y-2">
              {coAttendees.map((val, i) => (
                <input
                  key={i}
                  type="text"
                  value={val}
                  onChange={(e) => {
                    const next = [...coAttendees];
                    next[i] = e.target.value;
                    setCoAttendees(next);
                  }}
                  placeholder={labels.coAttendeePlaceholder}
                  className={inputClass}
                />
              ))}
            </div>
          </div>

          {/* ── Guest Side ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.guestSideLabel}{requiredBadge}
            </div>
            <div className="flex justify-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <span
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors"
                  style={{
                    borderColor: guestSide === "groom" ? "var(--color-gold)" : "var(--color-gold-light)",
                  }}
                >
                  {guestSide === "groom" && (
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--color-gold)" }} />
                  )}
                </span>
                <input
                  type="radio"
                  name="guestSide"
                  className="sr-only"
                  checked={guestSide === "groom"}
                  onChange={() => setGuestSide("groom")}
                />
                <span className="text-sm">{labels.groomGuest}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <span
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors"
                  style={{
                    borderColor: guestSide === "bride" ? "var(--color-gold)" : "var(--color-gold-light)",
                  }}
                >
                  {guestSide === "bride" && (
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--color-gold)" }} />
                  )}
                </span>
                <input
                  type="radio"
                  name="guestSide"
                  className="sr-only"
                  checked={guestSide === "bride"}
                  onChange={() => setGuestSide("bride")}
                />
                <span className="text-sm">{labels.brideGuest}</span>
              </label>
            </div>
            {errors.guestSide && (
              <p className="text-xs text-center mt-2" style={{ color: "#c44" }}>{errors.guestSide}</p>
            )}
          </div>

          {/* ── Phone ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.phoneLabel}{requiredBadge}
            </div>
            <div className="px-6">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={labels.phonePlaceholder}
                className={inputClass}
                required
              />
            </div>
            {errors.phone && (
              <p className="text-xs text-center mt-2" style={{ color: "#c44" }}>{errors.phone}</p>
            )}
          </div>

          {/* ── Email ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.emailLabel}
            </div>
            <div className="px-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={labels.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>

          {/* ── Postal Code ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.postalCodeLabel}
            </div>
            <div className="px-6 flex items-center gap-2">
              <span className="text-sm opacity-50">〒</span>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder={labels.postalCodePlaceholder}
                className={inputClass + " max-w-[180px]"}
              />
            </div>
          </div>

          {/* ── Address ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.addressLabel}
            </div>
            <div className="px-6">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder={labels.addressPlaceholder}
                className={inputClass}
              />
            </div>
          </div>

          {/* ── Conditional: Guest count ── */}
          {attending && (
            <div className={fieldCard}>
              <div className={fieldLabel}>
                {labels.guestCountLabel}
              </div>
              <div className="px-6">
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value) || 1)}
                  className={inputClass + " text-center max-w-[120px] mx-auto block"}
                />
              </div>
            </div>
          )}

          {/* ── Dietary ── */}
          <div className={fieldCard}>
            <div className={fieldLabel}>
              {labels.dietaryLabel}
            </div>
            <p className="text-[11px] text-center opacity-60 mb-3 px-6">
              {labels.dietaryNote}
            </p>
            <div className="px-6">
              <textarea
                value={dietary}
                onChange={(e) => setDietary(e.target.value)}
                rows={2}
                className={inputClass + " resize-none"}
              />
            </div>
          </div>

          {/* ── Message ── */}
          <div className={fieldCard + " border-b-0"}>
            <div className={fieldLabel}>
              {labels.messageLabel}
            </div>
            <div className="px-6">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={labels.messagePlaceholder}
                rows={4}
                className={inputClass + " resize-none"}
              />
            </div>
          </div>

          {/* ── Error ── */}
          {formState === "error" && (
            <p className="text-xs text-center py-3" style={{ color: "#c44" }}>
              {labels.errorMessage}
            </p>
          )}

          {/* ── Submit ── */}
          <div className="px-6 pb-8 pt-4">
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="cursor-pointer w-full py-4 text-sm font-bold tracking-widest rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 shadow-md hover:shadow-lg hover:bg-[var(--color-gold)]/90"
              style={{
                fontFamily: "var(--font-serif-latin)",
                background: "linear-gradient(135deg, #efd59e 0%, #e29886 100%)",
                color: "#FFFFFF",
                border: "1px solid #fff",
              }}
            >
              {formState === "submitting" ? labels.submitting : labels.submit}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
