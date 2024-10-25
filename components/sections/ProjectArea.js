import React from 'react'
import Link from 'next/link'

export default function ProjectArea() {
  return (
    <>
    <section className="project-sec1">
        <div className="container">
            <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-9 mb-n2 mb-lg-0">
                <div className="title-area text-center text-lg-start">
                <span className="sub-title">
                    <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                    Proiecte
                </span>
                <h2 className="sec-title">Proiecte Finisate Cu Succes</h2>
                </div>
            </div>
            <div className="col-auto">
                <div className="sec-btn">
                <div className="icon-box">
                    <button
                    data-slick-prev="#projectSlide1"
                    className="slick-arrow default"
                    >
                    <i className="far fa-arrow-left" />
                    </button>
                    <button
                    data-slick-next="#projectSlide1"
                    className="slick-arrow default"
                    >
                    <i className="far fa-arrow-right" />
                    </button>
                </div>
                </div>
            </div>
            </div>{" "}
            {/* / Title row */}
            <div
            className="row slider-shadow center-first themeholy-carousel"
            id="projectSlide1"
            data-slide-show={3}
            data-lg-slide-show={2}
            data-md-slide-show={2}
            data-sm-slide-show={1}
            data-focuson-select="false"
            >
            <div className="col-xl-4 col-md-6">
                <div className="project-card">
                <div className="project-img">
                    <img src="img/project/project_1_1.jpg" alt="project image" />
                </div>
                <div className="project-content-wrap">
                    <div className="project-content">
                    <p className="project-subtitle">Kitchen</p>
                    <h3 className="box-title">
                        <Link href="/projects" passHref>Plumbing Diagnosis</Link>
                    </h3>
                    </div>
                    <a
                    href="img/project/project_1_1.jpg"
                    className="icon-btn popup-image"
                    >
                    <i className="far fa-plus" />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="project-card">
                <div className="project-img">
                    <img src="img/project/project_1_2.jpg" alt="project image" />
                </div>
                <div className="project-content-wrap">
                    <div className="project-content">
                    <p className="project-subtitle">Kitchen</p>
                    <h3 className="box-title">
                        <Link href="/projects" passHref>Drain Plumbing</Link>
                    </h3>
                    </div>
                    <a
                    href="img/project/project_1_2.jpg"
                    className="icon-btn popup-image"
                    >
                    <i className="far fa-plus" />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="project-card">
                <div className="project-img">
                    <img src="img/project/project_1_3.jpg" alt="project image" />
                </div>
                <div className="project-content-wrap">
                    <div className="project-content">
                    <p className="project-subtitle">Kitchen</p>
                    <h3 className="box-title">
                        <Link href="/projects" passHref>Water Line Repair</Link>
                    </h3>
                    </div>
                    <a
                    href="img/project/project_1_3.jpg"
                    className="icon-btn popup-image"
                    >
                    <i className="far fa-plus" />
                    </a>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-md-6">
                <div className="project-card">
                <div className="project-img">
                    <img src="img/project/project_1_4.jpg" alt="project image" />
                </div>
                <div className="project-content-wrap">
                    <div className="project-content">
                    <p className="project-subtitle">Bathroom</p>
                    <h3 className="box-title">
                        <Link href="/projects" passHref>Water Line Repair</Link>
                    </h3>
                    </div>
                    <a
                    href="img/project/project_1_4.jpg"
                    className="icon-btn popup-image"
                    >
                    <i className="far fa-plus" />
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
