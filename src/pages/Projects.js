import React from "react";
// import { Card } from "react-bootstrap";

const Projects = () => {
  return (
    <section class="portfolio_area section_gap_top" id="portfolio">
        <div   class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main_title text-left">
                        <h2>quality work <br/>
                            Recently done project </h2>
                    </div>
                </div>
            </div>
            <div class="filters portfolio-filter">
                <ul>
                    <li class="active" data-filter="*">all</li>
                    <li data-filter=".popular">popular</li>
                    <li data-filter=".latest"> latest</li>
                    <li data-filter=".following">following</li>
                    <li data-filter=".upcoming">upcoming</li>
                </ul>
            </div>
    
            <div class="filters-content">
				<div class="row portfolio-grid justify-content-center">
					<div  class="col-lg-4 col-md-6 all latest">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p1.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p1.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">Az Security System</a></h4>
								<p>E-commerce Website</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all popular">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p2.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p2.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">Zahara Tours & Travel</a></h4>
								<p>Tourism Services</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all latest">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p3.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p3.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">Abeer Healthcare </a></h4>
								<p>Hospitality website</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all popular">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p4.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p4.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">Dream House LLC</a></h4>
								<p>Contractions company website</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all following">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p6.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p5.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">Doctors Portal </a></h4>
								<p>Hospitality website</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all upcoming">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p5.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p6.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">Honda CRV</a></h4>
								<p>Business website</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all upcoming following">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p7.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p7.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">green heaven</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all following">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p8.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p8.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4>fly male</h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 all upcoming">
						<div class="portfolio_box">
							<div class="single_portfolio">
								<img class="img-fluid w-100" src="img/portfolio/p9.jpg" alt=""/>
								<div class="overlay"></div>
								<a href="img/portfolio/p9.jpg" class="img-gal">
									<div class="icon">
										<span class="lnr lnr-cross"></span>
									</div>
								</a>
							</div>
							<div class="short_info">
								<h4><a href="portfolio-details.html">season face</a></h4>
								<p>Animated, portfolio</p>
							</div>
						</div>
					</div>
				</div>
			</div>
        </div>
    </section>
  );
};

export default Projects;


