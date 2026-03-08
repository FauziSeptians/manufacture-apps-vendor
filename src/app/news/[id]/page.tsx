import NewsDetailPage from '@/page/NewsDetailPage';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
  // 1. Await params dari object props
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 2. Teruskan id ke komponen client
  return <NewsDetailPage id={id} />;
}
