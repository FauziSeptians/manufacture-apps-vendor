'use client';

import { useDict } from '@/components/providers/DictionaryProvider';
import FooterSection from '../organism/FooterSection';
import NavbarComponent from '../ui/Navbar';

export default function LayoutTemplates({
  children,
}: {
  children: React.ReactNode;
}) {
  const dict = useDict();

  const navigationMenus = [
    { key: 'visi-misi', title: dict.Navbar.menu.vision, route: '#vission' },
    { key: 'product', title: dict.Navbar.menu.product, route: '#product' },
    {
      key: 'materials',
      title: dict.Navbar.menu.materials,
      route: '#materials',
    },
    {
      key: 'facility',
      title: dict.Navbar.menu.facility,
      route: '#facility',
    },
    { key: 'team', title: dict.Navbar.menu.team, route: '#team' },
    { key: 'partner', title: dict.Navbar.menu.partner, route: '#partner' },
    { key: 'news', title: dict.Navbar.menu.news, route: '#news' },
  ];

  return (
    <section className="w-full">
      <NavbarComponent menus={navigationMenus} contactPerson="081220709584" />
      <section>{children}</section>
      <FooterSection />
    </section>
  );
}
