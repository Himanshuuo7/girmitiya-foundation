import HeroSection from '../components/home/HeroSection';
import {
  AboutPreview,
  BlogPreview,
  FeaturedActivities,
  GalleryPartnersCta,
  MissionVision,
  ProgramHighlights,
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
      <MissionVision />
      <WorkAreas />
      <RootReconnect />
      <FeaturedActivities />
      <section className="py-20">
        <div className="container-pad">
          <StatsCounter />
        </div>
      </section>
      <ProgramHighlights />
      <Testimonials />
      <BlogPreview />
      <GalleryPartnersCta />
    </>
  );
}
