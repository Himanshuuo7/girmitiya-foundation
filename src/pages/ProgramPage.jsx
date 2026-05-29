import { CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { images } from '../data/siteData';

const content = {
  women: {
    eyebrow: 'Woman Empowerment',
    title: 'Women-led confidence, livelihood, and dignity programs.',
    image: images.women,
    text: 'The foundation supports women through awareness circles, practical learning, mentorship, financial literacy, and livelihood-linked training.',
    points: ['Self-help and support circles', 'Rights and health awareness sessions', 'Financial literacy and micro-enterprise learning', 'Leadership conversations with mentors']
  },
  skill: {
    eyebrow: 'Skill Development',
    title: 'Skills that turn aspiration into daily opportunity.',
    image: images.skill,
    text: 'Skill programs focus on employability, digital confidence, communication, entrepreneurship, and practical community training.',
    points: ['Digital basics and online safety', 'Career readiness and communication', 'Small enterprise and bookkeeping basics', 'Youth mentorship and placement guidance']
  },
  child: {
    eyebrow: 'Child Welfare',
    title: 'Safe, joyful, and supportive spaces for children.',
    image: images.child,
    text: 'Child welfare initiatives promote education support, nutrition awareness, safety, creativity, and family-centered care.',
    points: ['Learning kits and education support', 'Nutrition and hygiene awareness', 'Creative sessions and reading circles', 'Protection awareness for families']
  }
};

export default function ProgramPage({ type }) {
  const page = content[type];
  return (
    <>
      <PageHeader eyebrow={page.eyebrow} title={page.title} text={page.text} image={page.image} />
      <section className="py-20">
        <div className="container-pad grid items-center gap-10 lg:grid-cols-2">
          <img src={page.image} alt={page.eyebrow} loading="lazy" className="aspect-[4/3] rounded-[2rem] object-cover shadow-premium" />
          <div>
            <SectionHeading align="left" eyebrow="Program Design" title="Focused, community-led, and practical." text="Every initiative is designed with local participation, clear outcomes, and the sensitivity needed for community trust." />
            <div className="grid gap-3">
              {page.points.map((point) => (
                <Card key={point} className="flex items-center gap-3 p-4">
                  <CheckCircle2 className="shrink-0 text-primary" />
                  <span className="font-semibold text-light">{point}</span>
                </Card>
              ))}
            </div>
            <Button to="/contact" className="mt-7">Partner With This Program</Button>
          </div>
        </div>
      </section>
    </>
  );
}
