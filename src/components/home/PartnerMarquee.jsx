import { partnerLogos } from '../../data/siteData';

export default function PartnerMarquee() {
  const repeatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <div className="group overflow-hidden rounded-[1.9rem] border border-primary/18 bg-darker/78 p-3 shadow-premium">
      <div className="flex w-max gap-3 motion-safe:animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
        {repeatedLogos.map((name, index) => (
          <div key={`${name}-${index}`} className="flex min-w-56 items-center gap-3 rounded-[1.3rem] border border-primary/12 bg-light/6 px-5 py-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/12 font-display text-lg font-bold text-primary">
              {name.slice(0, 2).toUpperCase()}
            </span>
            <div>
              <p className="font-semibold text-light">{name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-light/50">Community partner</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}