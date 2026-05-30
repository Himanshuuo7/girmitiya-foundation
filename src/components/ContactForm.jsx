import Button from './common/Button';

export default function ContactForm() {
  return (
    <form className="grid gap-4 rounded-[1.8rem] border border-primary/12 bg-white/70 p-6 shadow-premium backdrop-blur" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-earth">
          <span>Full Name <span aria-hidden="true" className="text-primary">*</span></span>
          <input required className="rounded-2xl border border-primary/20 bg-white/90 px-4 py-3 text-ink outline-none transition placeholder:text-earth/40 focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-earth">
          <span>Email <span aria-hidden="true" className="text-primary">*</span></span>
          <input required type="email" className="rounded-2xl border border-primary/20 bg-white/90 px-4 py-3 text-ink outline-none transition placeholder:text-earth/40 focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="you@example.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-earth">
        <span>Subject <span aria-hidden="true" className="text-primary">*</span></span>
        <input required className="rounded-2xl border border-primary/20 bg-white/90 px-4 py-3 text-ink outline-none transition placeholder:text-earth/40 focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="How can we help?" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-earth">
        <span>Message <span aria-hidden="true" className="text-primary">*</span></span>
        <textarea required rows="5" className="resize-none rounded-2xl border border-primary/20 bg-white/90 px-4 py-3 text-ink outline-none transition placeholder:text-earth/40 focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Write your message..." />
      </label>
      <Button type="button">Submit Message</Button>
    </form>
  );
}
