// src/app/[locale]/(unauth)/page.tsx

import { getTranslations } from 'next-intl/server';

import Landing from '@/components/Landing';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Testimonials() {
  return <Landing translationsKey="Index" />;
}
