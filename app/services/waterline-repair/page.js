import React from 'react'
import Link from 'next/link'
import ProjectDetailsReparatiiApa from '@/components/sections/ProjectDetailsReparatiiApa'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Reparații la instalațiile de apă" />
        <ProjectDetailsReparatiiApa />
      </MainLayout>
    </>
  );
}
