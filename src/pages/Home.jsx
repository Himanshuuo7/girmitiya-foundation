import HeroSection from '../components/home/HeroSection';
import GlobalPresenceSection from '../components/home/GlobalPresenceSection';
import {
  AboutPreview,
  BlogPreview,
  FlowingMenuShowcase,
  GalleryPartnersCta,
  RootReconnect,
  Testimonials,
  WorkAreas
} from '../components/home/HomeSections';
import StatsCounter from '../components/StatsCounter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <section className="pb-20">
        <div className="container-pad">
          <StatsCounter />
        </div>
      </section>
      <WorkAreas />
      <GlobalPresenceSection />
      <RootReconnect />
      <Testimonials />
      <FlowingMenuShowcase />
      <BlogPreview />
      <GalleryPartnersCta />
    </>
  );
}
