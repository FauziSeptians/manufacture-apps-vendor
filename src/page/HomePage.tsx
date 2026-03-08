import CoreValueSection from '@/components/organism/CoreValueSection';
import HeroSection from '@/components/organism/HeroSection';
import LatestPostSection from '@/components/organism/LatestPostSection';
import MaterialSection from '@/components/organism/MaterialSection';
import OurTeamSection from '@/components/organism/OurtTeamSection';
import PartnerSection from '@/components/organism/PartnerSection';
import ProductSection from '@/components/organism/ProductSection';
import VissionMissionSection from '@/components/organism/VissionMissionSection';

export default function HomePage() {
  return (
    <section className="w-full">
      <HeroSection />
      <CoreValueSection />
      <VissionMissionSection />
      <ProductSection />
      <MaterialSection />
      <OurTeamSection />
      <PartnerSection />
      <LatestPostSection />
    </section>
  );
}
