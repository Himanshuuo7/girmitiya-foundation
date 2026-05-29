import { Archive, Map, Search, Send } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import { images, timeline } from '../data/siteData';

export default function RootSearch() {
  return (
    <>
      <PageHeader eyebrow="Root Search" title="A careful journey back to names, villages, records, and belonging." text="Root Search supports Girmitiya descendants as they organize family clues, preserve oral histories, and begin archival exploration with patience and respect." image={images.roots} />
      <section className="py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Card>
            <Search className="text-primary" size={34} />
            <h2 className="mt-5 font-display text-3xl font-bold text-primary">Begin Your Search</h2>
            <p className="mt-3 leading-7 text-light/75">Share whatever your family knows. Even a partial name, village, ship memory, or document can become a starting point.</p>
            <form className="mt-6 grid gap-4">
              {['Ancestor name or family surname', 'Known village / district', 'Country of settlement', 'Contact email'].map((label) => (
                <input key={label} className="rounded-2xl border border-primary/20 bg-dark/65 px-4 py-3 outline-none focus:border-maroon" placeholder={label} />
              ))}
              <textarea rows="4" className="resize-none rounded-2xl border border-primary/20 bg-dark/65 px-4 py-3 outline-none focus:border-maroon" placeholder="Tell us the story or clues you have..." />
              <Button type="button" icon={Send}>Submit Root Search Request</Button>
            </form>
          </Card>
          <div>
            <SectionHeading align="left" eyebrow="Historical Reconnect" title="The search is archival, emotional, and communal." text="It combines family testimony, historical records, public archives, and community memory. The foundation helps families frame the journey with care instead of rushing fragile histories." />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Document Clues', 'Names, passes, ship details, letters, old photographs, and migration stories.', Archive],
                ['Place Memory', 'Village names, temples, districts, songs, rituals, foods, and spoken fragments.', Map]
              ].map(([title, text, Icon]) => (
                <Card key={title}>
                  <Icon className="text-primary" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-primary">{title}</h3>
                  <p className="mt-3 leading-7 text-light/74">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pattern-band py-20">
        <div className="container-pad">
          <SectionHeading eyebrow="Timeline" title="From historical rupture to cultural reconnection." />
          <div className="relative grid gap-6 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <Card key={item.title} className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary font-bold text-light">{index + 1}</span>
                <p className="mt-5 text-sm font-bold uppercase tracking-[0.22em] text-primary">{item.year}</p>
                <h3 className="mt-2 font-display text-2xl font-bold text-primary">{item.title}</h3>
                <p className="mt-3 leading-7 text-light/74">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
