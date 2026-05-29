import { stats } from '../data/siteData';
import { useCounter } from '../hooks/useCounter';
import AnimatedContainer from './common/AnimatedContainer';

function Stat({ item }) {
  const { ref, count } = useCounter(item.value);
  return (
    <div ref={ref} className="rounded-3xl border border-primary/20 bg-darker/75 p-6 text-center shadow-premium">
      <p className="font-display text-4xl font-bold text-primary">
        {count}
        {item.suffix}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-light/65">{item.label}</p>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <AnimatedContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <Stat key={item.label} item={item} />
      ))}
    </AnimatedContainer>
  );
}
