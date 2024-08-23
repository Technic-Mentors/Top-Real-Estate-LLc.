import { Card, Col, Container, Row } from "react-bootstrap";

export default function MissionVision() {
    const missionVision = [
        { heading: "Our Mission", paragraph: "our mission is to provide exceptional real estate management services that enhance the value and appeal of properties for our clients. We are dedicated to delivering comprehensive, innovative, and efficient solutions that meet the unique needs of property owners and tenants alike.", id: "1" },
        { heading: "Our Vision", paragraph: "Our vision is to be the leading real estate management company globally, known for our unwavering commitment to quality, innovation, and customer-centric solutions. We aim to set new standards in the industry by fostering a culture of excellence and sustainability.", id: "2" }
    ]
    return (
        <>
            <Container className="pt-5">
                <Row className="g-4">
                    {missionVision && missionVision.map((data) => {
                        const cardStyle = { backgroundColor: data.id === "1" ? "var(--primary-color)" : "var(--secondary-color)", height: "100%", color: "white" }
                        return <Col key={data.id} md={6}>
                            <Card style={cardStyle}>
                                <Card.Body>
                                    <Card.Title>
                                        <h1 className="text-white">{data.heading}</h1>
                                    </Card.Title>
                                    <Card.Text>
                                        <p>{data.paragraph}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
        </>
    )
}
