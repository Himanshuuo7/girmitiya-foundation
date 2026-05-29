import { CheckCircle2 } from 'lucide-react';
import Card from './common/Card';
import Button from './common/Button';

export default function MembershipCard({ id, title, price, description, benefits, highlighted }) {
  return (
    <Card id={id} className={`relative ${highlighted ? 'bg-primary text-light' : ''}`}>
      {highlighted && <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-light">Popular</span>}
      <h3 className={`font-display text-3xl font-bold ${highlighted ? 'text-light' : 'text-primary'}`}>{title}</h3>
      <p className={`mt-3 leading-7 ${highlighted ? 'text-light/75' : 'text-light/75'}`}>{description}</p>
      <p className={`mt-6 font-display text-5xl font-bold ${highlighted ? 'text-primary' : 'text-primary'}`}>{price}</p>
      <ul className="mt-7 grid gap-3">
        {benefits.map((benefit) => (
          <li key={benefit} className={`flex gap-3 ${highlighted ? 'text-light/82' : 'text-light/78'}`}>
            <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={19} />
            {benefit}
          </li>
        ))}
      </ul>
      <Button to="/contact" variant={highlighted ? 'secondary' : 'primary'} className="mt-8 w-full">
        Join Membership
      </Button>
    </Card>
  );
}
