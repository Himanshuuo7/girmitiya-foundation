import ContactForm from '../components/ContactForm';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import SectionHeading from '../components/common/SectionHeading';
import { contactCards, images } from '../data/siteData';

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Start a conversation with Girmitiya Foundation." text="Reach out for membership, donations, volunteering, root search guidance, publications, partnerships, or program support." image={images.about} />
      <section className="py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading align="left" eyebrow="Get In Touch" title="We would be glad to hear from you." text="Use the form or contact details below. The details are placeholders and should be replaced with official foundation information before launch." />
            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="p-5">
                    <Icon className="text-primary" />
                    <h3 className="mt-3 font-bold text-primary">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-light/74">{item.value}</p>
                  </Card>
                );
              })}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="pb-20">
        <div className="container-pad">
          <div className="grid min-h-96 place-items-center rounded-[2rem] border border-primary/20 bg-[linear-gradient(135deg,#f8ead0,#fff7e6)] text-center shadow-premium">
            <div>
              <p className="font-display text-3xl font-bold text-primary">Embedded Map Placeholder</p>
              <p className="mt-3 text-light/70">Add the official Google Maps embed here for the foundation office.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
