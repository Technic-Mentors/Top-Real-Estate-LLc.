import { Col, Container, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faLinkedin, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { EmailOutlined, PhoneIphoneOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
export default function Topbar() {

  return (
    <>
      <section className="d-none d-lg-block topBar">
        <Container fluid>
          <Row className="justify-content-between align-items-center px-5 py-1">
            <Col md={8}>
              <div className="d-flex">
                <p className="me-3" style={{ margin: "0" }}>
                  <EmailOutlined className="me-2" />
                  info@toprealestatellc.com</p>
                <p style={{ margin: "0" }}>
                  <PhoneIphoneOutlined className="me-2" />
                  +971 50 7798535</p>
              </div>
            </Col>
            <Col md={3} className="d-flex justify-content-end">
              <Link to="https://facebook.com" target="blank" style={{ color: "white" }}>  <FontAwesomeIcon icon={faFacebookF} className="me-4"></FontAwesomeIcon></Link>
              <Link to="https://twitter.com" target="blank" style={{ color: "white" }}>  <FontAwesomeIcon icon={faTwitter} className="me-4"></FontAwesomeIcon></Link>
              <Link to="https://linkedin.com" target="blank" style={{ color: "white" }}> <FontAwesomeIcon icon={faLinkedin} className="me-4"></FontAwesomeIcon></Link>
              <Link to="https://youtube.com" target="blank" style={{ color: "white" }}> <FontAwesomeIcon icon={faYoutube} className="me-4"></FontAwesomeIcon></Link>
              <Link to="https://pinterest.com" target="blank" style={{ color: "white" }}> <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon></Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
