import React from 'react'
import Link from 'next/link'
import ProjectDetailsDesfundareCanalizare from '@/components/sections/ProjectDetailsDesfundareCanalizare'
import MainLayout from '@/components/layouts/MainLayout'
import Breadcrumbs from '@/components/layouts/Breadcrumbs'

export default function page() {
  return (
    <>
      <MainLayout>
        <Breadcrumbs breadcrumbTitle="Desfundare canalizare cu sarpe robotizat" />
        <ProjectDetailsDesfundareCanalizare />
      </MainLayout>
    </>
  );
}
