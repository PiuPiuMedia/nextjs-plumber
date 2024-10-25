import React from 'react'
import ProjectDetailsInstalatiiBaie from '@/components/sections/ProjectDetailsInstalatiiBaie'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Instalații sanitare pentru baie" />
        <ProjectDetailsInstalatiiBaie />
      </MainLayout>
    </>
  );
}
