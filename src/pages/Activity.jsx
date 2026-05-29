import ActivityCard from '../components/ActivityCard';
import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import { activities, images } from '../data/siteData';

export default function Activity() {
  return (
    <>
      <PageHeader eyebrow="Activity" title="Community programs designed for dignity and measurable change." text="Our activity areas connect cultural identity with social development, learning, welfare, and family support." image={images.about} />
      <section className="py-20">
        <div className="container-pad">
          <SectionHeading eyebrow="Current Focus" title="Programs across heritage and human development." />
          <div className="grid gap-6 lg:grid-cols-3">
            {activities.map((item) => <ActivityCard key={item.title} item={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
