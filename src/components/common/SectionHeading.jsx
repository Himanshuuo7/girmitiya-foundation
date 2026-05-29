import AnimatedContainer from './AnimatedContainer';

export default function SectionHeading({ eyebrow, title, text, align = 'center' }) {
  const alignment = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';
  return (
    <AnimatedContainer className={`mb-10 flex max-w-3xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-3 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-base leading-8 text-light/80 sm:text-lg">{text}</p>}
    </AnimatedContainer>
  );
}
