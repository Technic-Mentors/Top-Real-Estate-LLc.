import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function CallToAction() {

    return (
        <>
            {/* <section className="mt-5 callToAction"> */}
            <section className="my-5">
                {/* <div className="callToAction-overlay"> */}
                <Container className="px-5">
                    <Row className="py-5 align-items-center justify-content-center callAction bg-white">
                        <Col md={6}>
                            <h1>How can we help you?</h1>
                            <p>Please call us or submit a business inquiry</p>
                        </Col>
                        <Col md={3}>
                            <Button size="lg" as={Link} to="/contact">Contact Us Now!</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
