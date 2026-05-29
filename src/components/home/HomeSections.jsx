import { Link } from 'react-router-dom';
import { ArrowRight, Check, HandHeart, Sprout } from 'lucide-react';
import ActivityCard from '../ActivityCard';
import BlogCard from '../BlogCard';
import StatsCounter from '../StatsCounter';
import TestimonialSlider from '../TestimonialSlider';
import AnimatedContainer from '../common/AnimatedContainer';
import Button from '../common/Button';
import Card from '../common/Card';
import SectionHeading from '../common/SectionHeading';
import { activities, blogs, images, values, workAreas } from '../../data/siteData';

export function AboutPreview() {
  return (
    <section className="py-20">
      <div className="container-pad grid items-center gap-10 lg:grid-cols-2">
        <AnimatedContainer>
          <img src={images.about} alt="Community members" loading="lazy" className="aspect-[4/3] rounded-[2rem] object-cover shadow-premium" />
        </AnimatedContainer>
        <AnimatedContainer delay={0.1}>
          <SectionHeading align="left" eyebrow="About Foundation" title="A trust-centered movement for memory, dignity, and development." text="Girmitiya Foundation works with families, volunteers, educators, and community leaders to preserve ancestral identity while responding to present-day needs." />
          <div className="grid gap-3">
            {['Cultural heritage documentation', 'Grassroots social programs', 'Research, publications, and public learning'].map((item) => (
              <p key={item} className="flex items-center gap-3 font-semibold text-light"><Check className="text-primary" /> {item}</p>
            ))}
          </div>
          <Button to="/about" className="mt-7" icon={ArrowRight}>Know More</Button>
        </AnimatedContainer>
      </div>
    </section>
  );
}

export function MissionVision() {
  return (
    <section className="pattern-band py-20">
      <div className="container-pad">
        <SectionHeading eyebrow="Mission & Vision" title="Carrying the past with responsibility, building the future with care." />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ['Our Mission', 'To empower communities through heritage preservation, social development, inclusive education, and practical support systems.'],
            ['Our Vision', 'A confident Girmitiya community that knows its roots, protects its dignity, and creates opportunity for every generation.']
          ].map(([title, text]) => (
            <Card key={title}>
              <Sprout className="text-primary" size={34} />
              <h3 className="mt-5 font-display text-3xl font-bold text-primary">{title}</h3>
              <p className="mt-4 leading-8 text-light/78">{text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkAreas() {
  return (
    <section className="py-20">
      <div className="container-pad">
        <SectionHeading eyebrow="Work Areas" title="Programs shaped around real community needs." text="Each area connects practical development with the emotional strength of cultural belonging." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {workAreas.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.title} to={item.path}>
                <Card className="h-full">
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-primary/12 p-3 text-primary">
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-primary">{item.title}</h3>
                  <p className="mt-3 leading-7 text-light/74">{item.text}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function RootReconnect() {
  return (
    <section className="py-20">
      <div className="container-pad overflow-hidden rounded-[2.2rem] bg-primary text-light shadow-premium">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="p-8 sm:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Root Search</span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Find names, places, stories, and the quiet threads between them.</h2>
            <p className="mt-5 leading-8 text-light/76">Root Search helps descendants begin a careful journey through oral histories, archive clues, family documents, and community memory.</p>
            <Button to="/root-search" variant="secondary" className="mt-8" icon={ArrowRight}>Start Reconnecting</Button>
          </div>
          <img src={images.roots} alt="Old records and heritage" loading="lazy" className="h-full min-h-80 w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export function FeaturedActivities() {
  return (
    <section className="py-20">
      <div className="container-pad">
        <SectionHeading eyebrow="Featured Activities" title="Action that feels human, grounded, and measurable." />
        <div className="grid gap-6 lg:grid-cols-3">
          {activities.map((item) => <ActivityCard key={item.title} item={item} />)}
        </div>
      </div>
    </section>
  );
}

export function ProgramHighlights() {
  const items = [
    ['Women Empowerment', images.women, '/woman-empowerment', 'Confidence circles, financial literacy, livelihood support, and leadership workshops for women.'],
    ['Skill Development', images.skill, '/skill-development', 'Digital basics, career readiness, enterprise mentoring, and community training labs.'],
    ['Child Welfare', images.child, '/child-welfare', 'Education support, safe spaces, nutrition awareness, and creative learning opportunities.']
  ];
  return (
    <section className="pattern-band py-20">
      <div className="container-pad">
        <SectionHeading eyebrow="Program Highlights" title="Development programs with warmth and structure." />
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map(([title, image, path, text]) => (
            <Card key={title} className="overflow-hidden p-0">
              <img src={image} alt={title} loading="lazy" className="h-64 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-primary">{title}</h3>
                <p className="mt-3 leading-7 text-light/75">{text}</p>
                <Button to={path} variant="ghost" className="mt-5">View Program</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container-pad">
        <SectionHeading eyebrow="Voices" title="Community stories carry the heart of the foundation." />
        <TestimonialSlider />
      </div>
    </section>
  );
}

export function BlogPreview() {
  return (
    <section className="py-20">
      <div className="container-pad">
        <SectionHeading eyebrow="Journal" title="Ideas, field notes, and heritage reflections." />
        <div className="grid gap-6 lg:grid-cols-3">
          {blogs.slice(0, 3).map((post) => <BlogCard key={post.title} post={post} />)}
        </div>
      </div>
    </section>
  );
}

export function GalleryPartnersCta() {
  return (
    <>
      <section className="py-20">
        <div className="container-pad">
          <SectionHeading eyebrow="Media Gallery" title="Moments from the field, the archive, and the community." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[images.about, images.women, images.skill, images.child].map((image, index) => (
              <img key={image} src={image} alt={`Foundation gallery ${index + 1}`} loading="lazy" className="h-72 w-full rounded-[1.5rem] object-cover shadow-premium transition duration-700 hover:scale-[1.03]" />
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-pad">
          <div className="rounded-[2rem] border border-primary/20 bg-darker/70 p-8 shadow-premium">
            <p className="text-center text-sm font-bold uppercase tracking-[0.24em] text-light/55">Trusted by community partners</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {['Heritage Circle', 'Community Trust', 'Learning Forum', 'Roots Archive'].map((name) => (
                <div key={name} className="rounded-2xl bg-dark px-5 py-5 text-center font-display text-xl font-bold text-primary">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container-pad">
          <div className="rounded-[2.2rem] bg-gradient-to-r from-maroon to-earth p-8 text-light shadow-premium sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <HandHeart className="text-primary" size={42} />
              <h2 className="mt-4 font-display text-4xl font-bold">Your support can turn memory into momentum.</h2>
              <p className="mt-3 max-w-2xl leading-8 text-light/76">Donate, volunteer, sponsor a program, or help a family begin the root search journey.</p>
            </div>
            <Button to="/contact" variant="secondary" className="mt-7 lg:mt-0">Donate Now</Button>
          </div>
        </div>
      </section>
    </>
  );
}
