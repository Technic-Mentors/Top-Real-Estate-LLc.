
import { Col, Container, Row } from "react-bootstrap"
import CallToAction from "../RepeatedComponent/CallToAction"
import Team from "../RepeatedComponent/Team"
export default function TeamPage() {

    return (
        <>
            <div>
                <Container className="mt-5">
                    <Row>
                        <Col md={12}>
                            <p>At Top International Real Estate Management L.L.C, we pride ourselves on having a team of highly skilled professionals dedicated to delivering exceptional real estate services. Our team comprises experienced individuals with diverse backgrounds in property management, real estate development, financial management, and customer relations. Each team member brings a wealth of knowledge and a commitment to excellence, ensuring that our clients receive personalized and comprehensive solutions tailored to their unique needs. Together, we strive to exceed expectations, foster long-lasting relationships, and contribute to the growth and success of our client&apos; real estate ventures.</p>
                        </Col>
                    </Row>
                </Container>
                <Team />
                <CallToAction />
            </div>
        </>
    )
}
