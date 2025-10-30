import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import youtubeCloneImg from "../assets/img/youtube-clone.png";
import foodAppImg from "../assets/img/food-app.png";
import sameeaStoreImg from "../assets/img/sameea-store.png";
import responsiveImg from "../assets/img/responsive-portfolio.png";
import shopifyProject1 from "../assets/img/shopify-project1.png";
import shopifyProject2 from "../assets/img/shopify-project2.png";
import cssCardsImg from "../assets/img/css-cards.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Project = () => {

  const projects = [
    {
      title: "Responsive Portfolio", 
      description: "Modern Responsive Design",
      imgUrl: responsiveImg,
      projectUrl: "https://responsive-portfolio-website-two.vercel.app/"
    },
    {
      title: "YouTube Clone",
      description: "UI Clone Project", 
      imgUrl: youtubeCloneImg,
      projectUrl: "https://youtube-clone-gray-three.vercel.app/"
    },
    {
      title: "Food App",
      description: "Restaurant Application",
      imgUrl: foodAppImg,
      projectUrl: "https://food-app-flax-tau.vercel.app/"
    },
    {
      title: "Sameea Store",
      description: "E-commerce Website",
      imgUrl: sameeaStoreImg,
      projectUrl: "https://oursameeastore.rf.gd/"
    },
    {
      title: "Shopify Store 1",
      description: "E-commerce Development",
      imgUrl: shopifyProject1,
      projectUrl: "#"
    },
    {
      title: "Shopify Store 2", 
      description: "Store Customization",
      imgUrl: shopifyProject2,
      projectUrl: "#"
    },
    {
      title: "CSS Card Hover Effects",
      description: "Interactive CSS Cards",
      imgUrl: cssCardsImg,
      projectUrl: "https://css-card-hover-fawn.vercel.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of my recent projects showcasing my expertise in React.js, WordPress, Shopify, CSS animations, and frontend development. Each project demonstrates different aspects of modern web development and responsive design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">E-commerce</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects.filter(project => 
                            project.title.includes("Portfolio") || 
                            project.title.includes("YouTube") || 
                            project.title.includes("Food App") ||
                            project.title.includes("CSS Card")
                          ).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projects.filter(project => 
                            project.title.includes("Shopify") || 
                            project.title.includes("Store") ||
                            project.title.includes("E-commerce")
                          ).map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}