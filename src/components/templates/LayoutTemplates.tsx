import FooterSection from '../organism/FooterSection';
import NavbarComponent from '../ui/Navbar';

export default function LayoutTemplates({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigationMenus = [
    { key: 'visi-misi', title: 'Visi & Misi', route: '#vission' },
    { key: 'product', title: 'Product', route: '#product' },
    { key: 'materials', title: 'Bahan Baku', route: '#materials' },
    { key: 'team', title: 'Tim Kami', route: '#team' },
    { key: 'partner', title: 'Partner', route: '#partner' },
    { key: 'news', title: 'News', route: '#news' },
  ];

  return (
    <section className="w-full">
      <NavbarComponent menus={navigationMenus} contactPerson="081220709584" />
      <section>{children}</section>
      <FooterSection />
    </section>
  );
}
