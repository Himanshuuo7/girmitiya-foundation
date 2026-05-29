import { BookOpen, Download, FileText } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { images } from '../data/siteData';

export default function Publication() {
  const publications = [
    ['Root Search Guide', 'A beginner-friendly guide for families preparing documents and oral history clues.'],
    ['Girmitiya Heritage Notes', 'Short research notes on memory, culture, migration, and community identity.'],
    ['Community Impact Report', 'A transparent annual summary of programs, activities, partners, and learning.']
  ];
  return (
    <>
      <PageHeader eyebrow="Publication" title="Research, records, and public learning for the community." text="Our publication work translates heritage research and field learning into accessible resources." image={images.publication} />
      <section className="py-20">
        <div className="container-pad">
          <SectionHeading eyebrow="Resources" title="Documents that support memory and action." />
          <div className="grid gap-6 lg:grid-cols-3">
            {publications.map(([title, text], index) => (
              <Card key={title}>
                {index === 0 ? <BookOpen className="text-primary" /> : <FileText className="text-primary" />}
                <h3 className="mt-5 font-display text-2xl font-bold text-primary">{title}</h3>
                <p className="mt-3 leading-7 text-light/74">{text}</p>
                <Button to="/root-search" variant="ghost" className="mt-6" icon={Download}>View Resource</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
