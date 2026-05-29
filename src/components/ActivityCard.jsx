import Card from './common/Card';
import Button from './common/Button';

export default function ActivityCard({ item, to = '/activity' }) {
  const Icon = item.icon;
  return (
    <Card className="overflow-hidden p-0">
      <div className="relative overflow-hidden">
        <img src={item.image} alt={item.title} loading="lazy" className="h-60 w-full object-cover transition duration-700 hover:scale-110" />
        <span className="absolute left-5 top-5 rounded-full bg-dark/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          {item.category}
        </span>
      </div>
      <div className="p-6">
        <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary/12 text-primary">
          <Icon />
        </div>
        <h3 className="font-display text-2xl font-bold text-primary">{item.title}</h3>
        <p className="mt-3 leading-7 text-light/75">{item.text}</p>
        <Button to={to} variant="ghost" className="mt-5 px-4 py-2">Learn More</Button>
      </div>
    </Card>
  );
}
