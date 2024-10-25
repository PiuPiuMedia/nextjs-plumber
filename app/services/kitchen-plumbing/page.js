import React from 'react'
import ProjectDetails from '@/components/sections/ProjectDetailsInstalatiiBaie'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Instalații sanitare pentru bucătărie" />
        <ProjectDetails />
      </MainLayout>
    </>
  );
}
