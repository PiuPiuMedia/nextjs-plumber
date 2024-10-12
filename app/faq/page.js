import React from 'react'
import FullFaqArea from '@/components/sections/FullFaqArea'
import CtaArea from '@/components/sections/CtaArea'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'
export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Intrebari Frecvente" />
        <FullFaqArea />
        <CtaArea />
      </MainLayout>
    </>
  );
}
