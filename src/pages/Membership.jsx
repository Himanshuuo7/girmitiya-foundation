import PageHeader from '../components/common/PageHeader';
import SectionHeading from '../components/common/SectionHeading';
import MembershipCard from '../components/MembershipCard';
import { images } from '../data/siteData';

export default function Membership() {
  return (
    <>
      <PageHeader eyebrow="Membership" title="Become part of a living heritage and service network." text="Members support research, outreach, publications, programs, volunteer coordination, and the patient work of helping families reconnect." image={images.about} />
      <section className="py-20">
        <div className="container-pad">
          <SectionHeading eyebrow="Plans" title="Choose a membership that matches your commitment." />
          <div className="grid gap-6 lg:grid-cols-2">
            <MembershipCard id="lifetime" title="Life Time Membership" price="₹11,000" description="A long-term commitment for patrons, descendants, and supporters who want to sustain the foundation's core work." highlighted benefits={['Lifetime recognition as a foundation member', 'Invitations to heritage and publication events', 'Priority access to Root Search guidance', 'Annual impact updates and volunteer opportunities']} />
            <MembershipCard id="yearly" title="Yearly Membership" price="₹1,100" description="A flexible annual membership for volunteers, students, families, and community supporters." benefits={['Annual member certificate', 'Participation in local programs and workshops', 'Newsletter and research updates', 'Discounted seats for selected learning events']} />
          </div>
        </div>
      </section>
    </>
  );
}
