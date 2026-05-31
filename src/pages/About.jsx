import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { images, values } from '../data/siteData';

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="A foundation rooted in heritage and public service." text="Girmitiya Foundation exists to preserve the memory of indentured migration and convert that memory into practical programs for community dignity, education, livelihoods, and care." image={images.about} />
      <section className="py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Our Story" title="We believe cultural memory can become a force for healing." text="The foundation brings together descendants, researchers, volunteers, and social workers to document heritage, reconnect families, and support vulnerable communities through well-designed grassroots initiatives." />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <Icon className="text-saffron" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-light">{item.title}</h3>
                  <p className="mt-2 leading-7 text-light/80">{item.text}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
