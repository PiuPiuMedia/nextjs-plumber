import React from 'react'
import ProjectDetailsInstalatiiDrenaj from '@/components/sections/ProjectDetailsInstalatiiDrenaj'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Instalații si inlocuire sisteme de drenaj" />
        <ProjectDetailsInstalatiiDrenaj />
      </MainLayout>
    </>
  );
}
