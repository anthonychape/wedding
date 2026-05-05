import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  title: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown({ targetDate, labels, title }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Calculate once immediately on mount
    const target = new Date(targetDate);
    setTimeLeft(calculateTimeLeft(target));
    setIsMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ];

  return (
    <section id="countdown" className="py-8 md:py-12 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          className="text-xl md:text-2xl tracking-[0.2em] font-bold uppercase mb-8"
          style={{ fontFamily: "var(--font-serif-latin)", color: "var(--color-gold)" }}
        >
          {title}
        </h2>
        <div className="flex justify-center gap-6 md:gap-12">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span
                className="text-4xl md:text-6xl font-light tabular-nums"
                style={{ fontFamily: "var(--font-serif-latin)", color: "var(--color-charcoal)" }}
                suppressHydrationWarning
              >
                {isMounted ? String(unit.value).padStart(2, "0") : "00"}
              </span>
              <span className="text-xs tracking-widest mt-2 opacity-50">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
