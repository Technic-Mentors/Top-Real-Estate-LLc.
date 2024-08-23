import { Col, Container, Row } from "react-bootstrap"

export default function MissionVision() {
    const missionVision = [{
        mission:
            { heading: "Mission", paragraph: "Our mission is to deliver unparalleled real estate services with integrity, professionalism, and a deep commitment to client satisfaction. We strive to empower individuals and businesses by providing expert guidance, innovative solutions, and personalized service that turn their real estate goals into reality. We believe in building lasting relationships with our clients, offering them the resources and expertise they need to navigate the complex real estate market with confidence and ease.", li1: "Providing expert guidance to help clients achieve their real estate goals.", li2: "Upholding the highest standards in all our services.", li3: "Building trust with clients through personalized service.", id: "1" },
        vision:
            { heading: "Vision", paragraph: "Our vision is to be the leading real estate management company, recognized for setting new standards in service excellence and innovation. We aspire to build a future where real estate transactions are seamless, transparent, and beneficial for all stakeholders. By embracing cutting-edge technology, sustainable practices, and a client-first approach, we aim to redefine the real estate experience, fostering long-term relationships built on trust, mutual success, and a shared commitment to excellence.", li1: "Setting new standards in real estate management.", li2: "Embracing cutting-edge solutions for seamless transactions.", li3: "Fostering a future built on trust and mutual success.", id: "2" }
    }]
    return (
        <>
            <section className="mt-5">
                <h6 className="text-center">Mission & Vision</h6>
                <h1 className="text-center">Our Purpose And Aspiration</h1>
                <div className="missionImg">
                    <div className="mission-vision-overlay">
                        <Container className="py-4">
                            <Row>
                                {missionVision && missionVision.map(data => (
                                    <div key={data.id}>
                                        <Col md={12} className="py-4">
                                            <h1 className="text-center text-white">{data.mission.heading}</h1>
                                            <p>{data.mission.paragraph}</p>
                                            <li>{data.mission.li1}</li>
                                            <li>{data.mission.li2}</li>
                                            <li>{data.mission.li3}</li>
                                        </Col>
                                        <Col key={data.id} md={12} className="py-4">
                                            <h1 className="text-center text-white">{data.vision.heading}</h1>
                                            <p>{data.vision.paragraph}</p>
                                            <li>{data.vision.li1}</li>
                                            <li>{data.vision.li2}</li>
                                            <li>{data.vision.li3}</li>
                                        </Col>
                                    </div>
                                ))}
                            </Row>
                        </Container>
                    </div>
                </div>
            </section >

        </>
    )
}
