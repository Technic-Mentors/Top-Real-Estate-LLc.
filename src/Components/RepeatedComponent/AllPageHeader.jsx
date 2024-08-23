import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom"

export default function AllPageHeader() {
    const [heading, setHeading] = useState("")
    const { pathname } = useLocation()

    const changeHeading = () => {
        if (pathname === "/about") {
            setHeading("About Us")
        } else if (pathname === "/services") {
            setHeading("Our Services")
        } else if (pathname === "/contact") {
            setHeading("Contact Us")
        } else if (pathname === "/team") {
            setHeading("Team")
        }
    }
    useEffect(() => {
        changeHeading()
    })
    if (pathname === "/") {
        return;
    }
    return (
        <>
            <section className="allPageHeaderBg">
                <div className="allPageHeaderBg-overlay">
                    <Container>
                        <Row>
                            <Col className="text-center text-white py-7">
                                <h1 className="text-white"> {heading}</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}
