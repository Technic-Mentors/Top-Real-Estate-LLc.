
import teamImg1 from "../../assets/Othman Abdullah img.avif"
import teamImg2 from "../../assets/Muhammed Marathakooan img.avif"
import teamImg3 from "../../assets/Aamir Riaz img.avif"
import teamImg4 from "../../assets/Rafeeque Ahammed img.avif"
import teamImg5 from "../../assets/MOHAMED SHIHAD img.avif"
import teamImg6 from "../../assets/Muhammed Noushad img.avif"
import teamImg7 from "../../assets/Dilshad Ahammed img.avif"
import teamImg8 from "../../assets/Asim Riaz img.avif"
import teamImg9 from "../../assets/Nisar Ahammed img.avif"
import { Col, Container, Image, Row } from "react-bootstrap"
export default function Team() {

    return (
        <>
            <section className="teamBg mt-5">
                <div className="team-overlay">
                    <Container className="py-3">
                        <h6 className="text-center">Team</h6>
                        <h1 className="text-center text-white">Meet Our Team</h1>
                        <Row className="justify-content-center">
                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg1} alt="member image" />
                                <div className="member-info">
                                    <h1> Othman Abdullah Ahmed Alkhoori</h1>
                                    <h2>Managing Director</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg2} alt="member image" />
                                <div className="member-info">
                                    <h1>Muhammed Marathakooan Alavi Haji</h1>
                                    <h2>Leasing Manager</h2>
                                </div>
                            </Col>
                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg3} alt="member image" />
                                <div className="member-info">
                                    <h1>Aamir Riaz Chohan</h1>
                                    <h2>Operations Manager</h2>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center">
                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg5} alt="member image" />
                                <div className="member-info">
                                    <h1>MOHAMED SHIHAD MANGADAN</h1>
                                    <h2>Accounts Manager</h2>
                                </div>
                            </Col>
                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg4} alt="member image" />
                                <div className="member-info">
                                    <h1>Rafeeque Ahammed Marathakkodan</h1>
                                    <h2>Sales Manager</h2>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg8} alt="member image" />
                                <div className="member-info">
                                    <h1>Asim Riaz</h1>
                                    <h2>Property Consultant</h2>
                                </div>
                            </Col>
                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg7} alt="member image" />
                                <div className="member-info">
                                    <h1>Dilshad Ahammed</h1>
                                    <h2>Property Consultant</h2>
                                </div>
                            </Col>

                        </Row>
                        <Row className="justify-content-center">
                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg6} alt="member image" />
                                <div className="member-info">
                                    <h1>Muhammed Noushad</h1>
                                    <h2>Leasing Consultant</h2>
                                </div>
                            </Col>

                            <Col md={3} xs={6} className="teamCol">
                                <Image className="teamImg" fluid src={teamImg9} alt="member image" />
                                <div className="member-info">
                                    <h1>Nisar Ahammed</h1>
                                    <h2>Sales Representative</h2>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
