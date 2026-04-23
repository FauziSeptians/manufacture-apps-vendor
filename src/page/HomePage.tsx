import ContactFormSection from '@/components/organism/ContactFormSection';
import CoreValueSection from '@/components/organism/CoreValueSection';
import FacilitySection from '@/components/organism/FacilitySection';
import HeroSection from '@/components/organism/HeroSection';
import LatestPostSection from '@/components/organism/LatestPostSection';
import MaterialSection from '@/components/organism/MaterialSection';
import OurTeamSection from '@/components/organism/OurTeamSection';
import PartnerSection from '@/components/organism/PartnerSection';
import ProductSection from '@/components/organism/ProductSection';
import VissionMissionSection from '@/components/organism/VissionMissionSection';
import type { Dictionary, Locale } from '@/lib/dictionary';

export default function HomePage({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  return (
    <section className="w-full">
      <HeroSection dict={dict} />
      <CoreValueSection dict={dict} />
      <VissionMissionSection dict={dict} />
      <ProductSection dict={dict} locale={locale} />
      <MaterialSection dict={dict} />
      <FacilitySection dict={dict} />
      <OurTeamSection dict={dict} />
      <PartnerSection dict={dict} />
      <LatestPostSection dict={dict} />
      <ContactFormSection dict={dict} />
    </section>
  );
}
