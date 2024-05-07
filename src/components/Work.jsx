import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kreed from "../assets/kreed.png";
import courses from "../assets/courses.png";
import investor from "../assets/investor.png";
import mart from "../assets/shopiness.png";
import port from "../assets/portfolio.png";
const Work = () => {
  const data = [
    {
      title: "Kreed Admin Dashboard",
      description:
        "This dashboard is created using react and firebase.By this admin of Kreed Mobile App can easily track  stats , post count , users in different catagories etc (Firebase,React).",
      url: "https://github.com/cehpoint-official/Kreed-Admin",
      imgSrc: kreed,
    },

    {
      title: "Courses Cracked",
      description:
        "At Courses Crc, you can stream valuable videos of best creators, you can gain practical knowledge and learn real-world skills that will help you transform your life at work, school and home. (Firebase,React)",
      url: "https://courses-app-tau.vercel.app/",
      imgSrc: courses,
    },
    {
      title: "Bidchemz Investor Portal",
      description:
        "Investor portal allows you to manage all of the documents and investors for each real estate deal in a centralized location. (Firebase,React)",
      url: "https://investor-portal-updated-user.vercel.app/financial-projections",
      imgSrc: investor,
    },

    {
      title: "Shoppiness Mart",
      description:
        "A charity website in which we raise free funds for charity with your everyday online shopping. (Firebase,React)",
      url: "https://shoppiness-mart.vercel.app/",
      imgSrc: mart,
    },
    {
      title: "Fiverr Clone MERN",
      description:
        "Fiverr's platform connects freelancers (sellers) to people or businesses looking to hire (buyers), encouraging a wide range of services in a free market.(React,Express,MongoDB,Node)",
      url: "https://github.com/basitabdullah/fiverr",
      imgSrc:
        "https://media.smallbiztrends.com/2023/01/How-to-Sell-on-Fiverr.png",
    },
    {
      title: "PORTFOLIO",
      description: "My Portfolio In which you can see my latest works.",
      url: "https://fahim-portfolio-oonbmfc5r-basitabdullah.vercel.app/",
      imgSrc: port,
    },
  ];

  return (
    <div id="work">
      <h2>Work</h2>
      <section>
        <article>
          <Carousel
            showArrows={true}
            showIndicators={true}
            showThumbs={false}
            interval={3000}
            infiniteLoop={true}
            autoPlay={true}
            showStatus={false}
          >
            {data.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a href={i.url} target="blank">
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
