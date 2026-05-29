import Button from './common/Button';

export default function ContactForm() {
  return (
    <form className="grid gap-4 rounded-[1.8rem] border border-primary/20 bg-darker/80 p-6 shadow-premium" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-light">
          Full Name
          <input className="rounded-2xl border border-primary/20 bg-dark/60 px-4 py-3 outline-none transition focus:border-maroon" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-light">
          Email
          <input type="email" className="rounded-2xl border border-primary/20 bg-dark/60 px-4 py-3 outline-none transition focus:border-maroon" placeholder="you@example.com" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-light">
        Subject
        <input className="rounded-2xl border border-primary/20 bg-dark/60 px-4 py-3 outline-none transition focus:border-maroon" placeholder="How can we help?" />
      </label>
      <label className="grid gap-2 text-sm font-semibold text-light">
        Message
        <textarea rows="5" className="resize-none rounded-2xl border border-primary/20 bg-dark/60 px-4 py-3 outline-none transition focus:border-maroon" placeholder="Write your message..." />
      </label>
      <Button type="button">Submit Message</Button>
    </form>
  );
}
