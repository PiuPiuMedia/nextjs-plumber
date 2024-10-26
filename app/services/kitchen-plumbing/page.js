import React from 'react'
import ProjectDetailsInstalatiiBucatarie from '@/components/sections/ProjectDetailsInstalatiiBucatarie'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Instalații sanitare pentru bucătărie" />
        <ProjectDetailsInstalatiiBucatarie />
      </MainLayout>
    </>
  );
}
