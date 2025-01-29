import { faFacebookF, faLinkedin, faPinterest, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkedAlt, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom"
export default function Footer() {
  const { pathname } = useLocation()
  const moveToTop = (path) => {
    if (pathname === path) {
      window.scrollTo(0, 0)
    }
  }
  return (
    <>
      <section className="footer">
        <Container>
          <Row className="py-3 justify-content-between">
            <Col md={4}>
              <h3 className="text-white">Top International Real Estate</h3>
              <p>Welcome to TOP INTERNATIONAL REAL ESTATE MANAGEMENT - L.L.C. We help you buy, sell, and manage properties with ease. Our experienced team is here to make your real estate journey smooth and hassle-free. Let us assist you in finding the perfect property or managing your current investments.</p>
            </Col>
            <Col md={2} className="siteLInks">
              <h3 className="text-white">Site Links</h3>
              <ListGroup>
                <ListGroup.Item action as={Link} to="/" onClick={() => moveToTop("/")}>Home</ListGroup.Item>
                <ListGroup.Item action as={Link} to="/about" onClick={() => moveToTop("/about")}>About</ListGroup.Item>
                <ListGroup.Item action as={Link} to="/team" onClick={() => moveToTop("/team")}>Team</ListGroup.Item>
                <ListGroup.Item action as={Link} to="/services" onClick={() => moveToTop("/services")}>Services</ListGroup.Item>
                <ListGroup.Item action as={Link} to="/contact" onClick={() => moveToTop("/contact")}>Contact</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <h3 className="text-white">Contact Info</h3>
              <p><FontAwesomeIcon icon={faMobileAlt} className="me-4" />+971 26 747 250</p>
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faEnvelope} className="me-4" /><p>info@toprealestatellc.com</p>
              </div>
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faMapMarkedAlt} className="me-4" /> <p>Mohammad Bin Zayed - ME 9 Abu Dhabi United Arab Emirates</p>
              </div>

            </Col>
            <Col md={2}>
              <h3 className="text-white">Follow Us</h3>
              <Link to="https://facebook.com" target="blank" style={{ color: "white", textDecoration: "none" }}>  <FontAwesomeIcon icon={faFacebookF} className="me-3"></FontAwesomeIcon></Link>
              <Link to="https://twitter.com" target="blank" style={{ color: "white", textDecoration: "none" }}>  <FontAwesomeIcon icon={faTwitter} className="me-3"></FontAwesomeIcon></Link>
              <Link to="https://linkedin.com" target="blank" style={{ color: "white", textDecoration: "none" }}> <FontAwesomeIcon icon={faLinkedin} className="me-3"></FontAwesomeIcon></Link>
              <Link to="https://youtube.com" target="blank" style={{ color: "white", textDecoration: "none" }}> <FontAwesomeIcon icon={faYoutube} className="me-3"></FontAwesomeIcon></Link>
              <Link to="https://pinterest.com" target="blank" style={{ color: "white", textDecoration: "none" }}> <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon></Link>
            </Col>
          </Row>
        </Container>
        <div className="footerBottom">
          <p className="m-0">&copy; TOP INTERNATIONAL REAL ESTATE MANAGEMENT - L.L.C,<br /> All right reserved. Developed With Love By <a style={{ color: "white", textDecoration: "underline" }} href="https://technicmentors.com/" target="blank"> Technic Mentors</a></p>
        </div>
      </section>

      <div className="whatsaapIcon">
        <a
          href="https://wa.me/+971507798535"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </>
  );
}
