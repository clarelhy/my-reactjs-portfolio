/**
 * ProjectList.jsx
 * @author Clare Lim <lhy.clare@gmail.com>
 * @file ProjectList component that generates Project components based on data
 */

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap/";
import { GetProjects } from "../services/";
import { Title, Project } from "../components";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons";
import "../styles/ProjectList.css";
import { log } from "../Utility";
import { useApplicationContext } from "../contexts/ApplicationContext";

const COMPONENT_NAME = "ProjectList";

export const ProjectList = () => {
  const applicationContext = useApplicationContext();
  const { isMobile, isDesktop, isTablet } = applicationContext;

  const cardsPerPage = 9;
  const [sortedProjects, setSortedProjects] = useState([]);
  const [projectsByPage, setProjectsByPage] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    GetProjects().then((response) => {
      log(COMPONENT_NAME, "GetProjects Response", response);
      const data = response.data || [];
      const sortedData = data.sort(
        (a, b) => Number(b.yearStart) - Number(a.yearStart)
      );

      // set state to display when device is desktop
      setSortedProjects(sortedData);

      const pageCount = Math.ceil(sortedData.length / cardsPerPage);

      let projectArray = [];
      for (
        let currentPageCount = 1;
        currentPageCount - 1 < pageCount;
        currentPageCount++
      ) {
        // multiply cardsPerPage by currentPageCount - 1 to increment as each page's array is populated
        // i.e. page 1 should have key < 9, page 2 should have key > 9 && < 18... etc
        // page 1 will be smaller than (currentPageCount = 1 * 9), bigger than (currentPageCount = 0 * 9): 0 < x >= 9
        // page 2 will be smaller than (currentPageCount = 2 * 9), bigger than (currentPageCount = 1 * 9): 9 < x >= 18
        let perPage = data.filter(
          (item, key) =>
            key < cardsPerPage * currentPageCount &&
            key >= cardsPerPage * (currentPageCount - 1)
        );

        // this will be pushed into projectArray at index 0 (for page 1), index 1 (for page 2) etc
        // i.e. [ [ {}, {}... ], [ {}, {}... ]... ]
        projectArray.push(perPage);
      }
      setProjectsByPage(projectArray);
    });
  }, []);

  const handleSelect = (selectedPage, e) => {
    setCurrentPage(selectedPage);
  };

  return (
    <section
      id="project-list"
      className="jumbotron d-flex align-items-center flex-column"
    >
      {/* Project List */}
      <Container
        fluid
        className={
          isMobile || isTablet
            ? "mobile-margin-top"
            : "content-container main-margin-top"
        }
      >
        <Fade
          bottom={isMobile}
          left={isDesktop}
          duration={1000}
          delay={300}
          distance="30px"
        >
          <Title title="What I've Done" />
        </Fade>
        {isDesktop ? (
          /* Desktop View */
          <Carousel
            className="carousel-container"
            activeIndex={currentPage}
            interval={null}
            onSelect={handleSelect}
          >
            {projectsByPage.map((page, pageIndex) => {
              return (
                <Carousel.Item key={pageIndex}>
                  <div className="container">
                    <div className="row hidden-md-up">
                      {page.map((project, key) => {
                        return key < cardsPerPage ? (
                          <div className="col-md-4" key={key}>
                            <div style={{ display: "grid" }}>
                              <Fade
                                bottom={isMobile}
                                left={isDesktop}
                                duration={1000}
                                delay={150 * key}
                                distance="30px"
                              >
                                <Project
                                  project={project}
                                  isDesktop={isDesktop}
                                  isMobile={isMobile}
                                  isTablet={isTablet}
                                />
                              </Fade>
                            </div>
                          </div>
                        ) : (
                          <></>
                        );
                      })}
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          /* Mobile View */
          <Container>
            <Row xs={1} md={2} className="g-4">
              {sortedProjects.map((project, key) => {
                return (
                  <Col key={key}>
                    <Fade
                      bottom={isMobile}
                      left={isDesktop}
                      duration={1000}
                      delay={150 * key}
                      distance="30px"
                    >
                      <Project
                        project={project}
                        isDesktop={isDesktop}
                        isMobile={isMobile}
                        isTablet={isTablet}
                      />
                    </Fade>
                  </Col>
                );
              })}
            </Row>
          </Container>
        )}
      </Container>
      {/* CTA to Contact */}
      <Fade
        bottom={isMobile}
        left={isDesktop}
        duration={1000}
        delay={600}
        distance="30px"
      >
        <Row>
          <Col style={{ textAlign: "center" }}>
            <p className="cta">
              <span className="cta-btn cta-btn--about">
                <Link to="contact" smooth duration={500}>
                  {"Contact Me"} <FontAwesomeIcon icon={faArrowAltCircleDown} />
                </Link>
              </span>
            </p>
          </Col>
        </Row>
      </Fade>
    </section>
  );
};
