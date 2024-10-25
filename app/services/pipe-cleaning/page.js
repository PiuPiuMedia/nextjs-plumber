import React from 'react'
import Link from 'next/link'
import ProjectDetails from '@/components/sections/ProjectDetailsInstalatiiBaie'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Desfundare canalizare cu sarpe robotizat" />
        <ProjectDetails />
      </MainLayout>
    </>
  );
}
