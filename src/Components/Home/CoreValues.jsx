import { EmojiEventsOutlined, HandshakeOutlined, LightbulbOutlined, NatureOutlined, PersonOutlined, VerifiedOutlined } from "@mui/icons-material"
import { Card, Col, Container, Row } from "react-bootstrap"

export default function CoreValues() {
    const coreValues = [
        {
            heading: "Integrity", paragraph: "We uphold honesty and transparency in all our interactions, building trust with clients and partners.", icon: <VerifiedOutlined className="coreValuesIcon"/>, id: "1"
        },
        { heading: "Excellence", paragraph: "We strive for quality and continuous improvement, aiming to exceed client expectations.", icon: <EmojiEventsOutlined className="coreValuesIcon"/>, id: "2" },
        { heading: "Innovation", paragraph: "We embrace creativity and forward-thinking solutions to stay ahead of industry trends.", icon: <LightbulbOutlined className="coreValuesIcon"/>, id: "3" },
        { heading: "Customer Focus", paragraph: "We prioritize our clients&apos; needs, providing personalized and effective real estate management services.", icon: <PersonOutlined className="coreValuesIcon"/>, id: "4" },
        { heading: "Sustainability", paragraph: "We commit to sustainable practices that protect the environment and promote community well-being.", icon: <NatureOutlined className="coreValuesIcon"/>, id: "5" },
        { heading: "Collaboration", paragraph: "We value teamwork, working together with clients, partners, and employees for better outcomes.", icon: <HandshakeOutlined className="coreValuesIcon"/>, id: "6" }
    ]
    return (
        <>
            {/* core values */}
            <Container className="pt-5">
                <h6 className="text-center">Guiding Principles</h6>
                <h1 className="text-center">Our Core Values</h1>
                <Row className="g-3 coreValues">
                    {coreValues && coreValues.map((data) => {
                        return <Col key={data.id} md={4}>

                            <Card style={{ height: "100%" }}>
                                <Card.Body>
                                    {data.icon}
                                    <Card.Title><h3>{data.heading}</h3></Card.Title>
                                    <Card.Text><p>{data.paragraph}</p></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    })}
                </Row>
            </Container>
        </>
    )
}
