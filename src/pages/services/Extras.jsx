import { useParams } from "react-router-dom";
import Banner from "../../components/banner/Banner";
import { useEffect } from "react";
import { Container, Row, Col, Modal, Button, Carousel } from "react-bootstrap";
import { serviceItems } from "./actualServices.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = serviceItems.find((s) => s.slug === slug);

  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 200,
    });
  }, []);

  window.scrollTo(0, 0);
  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <>
      <Container fluid>
        <Banner title={service.name} />
        <Container className="py-3 mt-5 text-justify">
          <div>
            {service.name !== "Sustainability" &&
              service.name !== "Digital Solutions" && (
                <p className="defbodyFont" data-aos="fade-up">
                  {service.description}
                </p>
              )}
            <div className="defbodyFont" data-aos="fade-down">
              {service.detailedContent}
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default ServiceDetails;
