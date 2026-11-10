import { cn } from "@/lib/utils";

const HEIGHTS = [30, 55, 40, 80, 60, 95, 50, 70, 100, 65, 85, 45, 75, 55, 90, 40, 65, 35, 80, 50, 60, 30, 45, 25];
// #E8813F → #D86F5A → #C04BA0 → #9A4BC4 → #7A4BE0
const STOPS = [[232,129,63],[216,111,90],[192,75,160],[154,75,196],[122,75,224]];
function colorAt(t: number) {
  const seg = Math.min(STOPS.length - 2, Math.floor(t * (STOPS.length - 1)));
  const lt = t * (STOPS.length - 1) - seg;
  const a = STOPS[seg]!; const b = STOPS[seg + 1]!;
  return `rgb(${a.map((v, i) => Math.round(v + (b[i]! - v) * lt)).join(",")})`;
}

export function Waveform({ className, bars = HEIGHTS.length }: { className?: string; bars?: number }) {
  const hs = HEIGHTS.slice(0, bars);
  return (
    <div aria-hidden className={cn("flex h-14 items-center gap-[5px]", className)}>
      {hs.map((h, i) => (
        <span
          key={i}
          className="wave-bar w-[5px] rounded-full"
          style={{ height: `${h}%`, backgroundColor: colorAt(i / (hs.length - 1)), animationDelay: `${(i % 7) * 0.12}s` }}
        />
      ))}
    </div>
  );
}
