'use client';

import FooterSection from '../organism/FooterSection';
import NavbarComponent from '../ui/Navbar';
import type { Dictionary } from '@/lib/dictionary';

export default function LayoutTemplates({
  children,
  dict,
}: {
  children: React.ReactNode;
  dict: Dictionary;
}) {
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
      <NavbarComponent
        menus={navigationMenus}
        contactPerson="081220709584"
        dict={dict}
      />
      <section>{children}</section>
      <FooterSection dict={dict} />
    </section>
  );
}
