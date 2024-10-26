import React from 'react'
import ProjectDetailsInstalatiiGaz from '@/components/sections/ProjectDetailsInstalatiiGaz'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Servicii instalații de gaz" />
        <ProjectDetailsInstalatiiGaz />
      </MainLayout>
    </>
  );
}