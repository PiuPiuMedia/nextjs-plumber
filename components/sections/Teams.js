import React from 'react'
import Link from 'next/link'

export default function Teams() {
  return (
    <>
    <section className="space">
        <div className="container">
            <div className="title-area text-center">
            <span className="sub-title">
                <img src="img/theme-img/title_shape_1.svg" alt="shape" />
                Echipa de Experti
            </span>
            <h2 className="sec-title">Faceti Cunostinta cu Profesionistii</h2>
            </div>
            <div
            className="row slider-shadow themeholy-carousel"
            data-slide-show={4}
            data-lg-slide-show={3}
            data-md-slide-show={2}
            data-sm-slide-show={2}
            data-xs-slide-show={1}
            data-arrows="true"
            >
            {/* Single Item */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="themeholy-team team-card">
                <div className="team-img">
                    <img src="img/team/team_1_Cristi.jpg" alt="Team" />
                    <div className="themeholy-social">
                    <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                    <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                    <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                    <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
                    </div>
                </div>
                <div className="team-content">
                    <div className="share-btn">
                    <i className="fa-light fa-share-nodes" />
                    </div>
                    <div className="media-body">
                    <h3 className="box-title">
                        Cristian
                    </h3>
                    <span className="team-desig">Inginer coordonator</span>
                    </div>
                </div>
                </div>
            </div>
            {/* Single Item */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="themeholy-team team-card">
                <div className="team-img">
                    <img src="img/team/team_1_2.jpg" alt="Team" />
                    <div className="themeholy-social">
                    <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                    <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                    <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                    <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
                    </div>
                </div>
                <div className="team-content">
                    <div className="share-btn">
                    <i className="fa-light fa-share-nodes" />
                    </div>
                    <div className="media-body">
                    <h3 className="box-title">
                        Ana-Maria
                    </h3>
                    <span className="team-desig">Coordonator Operațional</span>
                    </div>
                </div>
                </div>
            </div>
            {/* Single Item */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="themeholy-team team-card">
                <div className="team-img">
                    <img src="img/team/team_1_3.jpg" alt="Team" />
                    <div className="themeholy-social">
                    <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                    <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                    <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                    <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
                    </div>
                </div>
                <div className="team-content">
                    <div className="share-btn">
                    <i className="fa-light fa-share-nodes" />
                    </div>
                    <div className="media-body">
                    <h3 className="box-title">
                        Lucian
                    </h3>
                    <span className="team-desig">Responsabil Tehnic</span>
                    </div>
                </div>
                </div>
            </div>
            {/* Single Item */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="themeholy-team team-card">
                <div className="team-img">
                    <img src="img/team/team_1_4.jpg" alt="Team" />
                    <div className="themeholy-social">
                    <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                    <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                    <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                    <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
                    </div>
                </div>
                <div className="team-content">
                    <div className="share-btn">
                    <i className="fa-light fa-share-nodes" />
                    </div>
                    <div className="media-body">
                    <h3 className="box-title">
                        Alexandru
                    </h3>
                    <span className="team-desig">Electrician-Sef</span>
                    </div>
                </div>
                </div>
            </div>
            {/* Single Item */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
                <div className="themeholy-team team-card">
                <div className="team-img">
                    <img src="img/team/team_1_5.jpg" alt="Team" />
                    <div className="themeholy-social">
                    <Link href="https://facebook.com/" passHref><i className="fab fa-facebook-f" /></Link>
                    <Link href="https://twitter.com/" passHref><i className="fab fa-twitter" /></Link>
                    <Link href="https://instagram.com/" passHref><i className="fab fa-instagram" /></Link>
                    <Link href="https://linkedin.com/" passHref><i className="fab fa-linkedin-in" /></Link>
                    </div>
                </div>
                <div className="team-content">
                    <div className="share-btn">
                    <i className="fa-light fa-share-nodes" />
                    </div>
                    <div className="media-body">
                    <h3 className="box-title">
                        Simona
                    </h3>
                    <span className="team-desig">Specialistă în instalații</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
