import { Button, Col, Container, Image, Row } from "react-bootstrap";
import aboutImg1 from "../../assets/realStateAbout1.avif"
import aboutImg2 from "../../assets/realStateAbout2.avif"
import aboutImg3 from "../../assets/realStateAbout3.avif"
import aboutImg4 from "../../assets/realStateAbout4.avif"
import { Link } from "react-router-dom";
export default function AboutUs() {
    return (
        <>
            <Container className="pt-5">
                <Row className="align-items-center g-4">
                    <Col md={6}>
                        <h6>About Us</h6>
                        <h1>Managing Real Estate with Precision and Care</h1>
                        <p className="py-4">At TOP INTERNATIONAL REAL ESTATE MANAGEMENT - L.L.C, we are passionate about delivering top-notch real estate services. With years of industry experience, our team is committed to helping you achieve your real estate goals. We offer a range of services designed to make your property journey seamless and successful. Our client-focused approach ensures that you receive personalized attention and expert advice every step of the way.</p>
                        <Button size="lg" as={Link} to="/about">Read More</Button>

                    </Col>
                    <Col md={6}>
                        <Row className="g-4">
                            <Col md={6} sm={6}>
                                <Image fluid src={aboutImg4} className="img1" style={{ borderRadius: "20px" }}></Image>
                            </Col>
                            <Col md={6} sm={6}>
                                <Image fluid src={aboutImg2} className="img2" style={{ borderRadius: "20px" }}></Image>
                            </Col>
                            <Col md={6}>
                                <Image fluid src={aboutImg3} className="img3" style={{ borderRadius: "20px" }}></Image>
                            </Col>
                            <Col md={6}>
                                <Image fluid src={aboutImg1} style={{ marginTop: "-100px", borderRadius: "20px" }} className="img4"></Image>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
