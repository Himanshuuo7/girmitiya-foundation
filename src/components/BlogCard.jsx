import { CalendarDays } from 'lucide-react';
import Card from './common/Card';

export default function BlogCard({ post }) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="overflow-hidden">
        <img src={post.image} alt={post.title} loading="lazy" className="h-56 w-full object-cover transition duration-700 hover:scale-110" />
      </div>
      <div className="p-6">
        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-primary">
          {post.category}
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold text-primary">{post.title}</h3>
        <p className="mt-3 line-clamp-3 leading-7 text-light/75">{post.excerpt}</p>
        <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-light/60">
          <CalendarDays size={16} /> {post.date}
        </p>
      </div>
    </Card>
  );
}
