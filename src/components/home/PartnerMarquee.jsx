import { partnerLogos } from '../../data/siteData';

export default function PartnerMarquee() {
  const repeatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="group overflow-hidden rounded-[1.9rem] border border-primary/10 bg-white/90 p-3 shadow-[0_16px_36px_rgba(95,59,36,0.1)]">
      <div className="flex w-max gap-3 motion-safe:animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {repeatedLogos.map((name, index) => (
          <div key={`${name}-${index}`} className="flex min-w-56 items-center gap-3 rounded-[1.3rem] border border-primary/10 bg-light/80 px-5 py-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron/15 font-display text-lg font-bold text-primary">
              {name.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <p className="font-semibold text-earth">{name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-earth/60">Community partner</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}