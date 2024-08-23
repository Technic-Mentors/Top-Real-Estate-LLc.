import { Col, Container, Row } from "react-bootstrap";

export default function AboutUsSection() {
    const aboutUsList = [
        { list: "Efficient management of residential and commercial properties, including maintenance, tenant relations, and financial reporting.", id: "1" },
        { list: "Expert assistance in buying and selling properties, from finding the right property to closing the deal.", id: "2" },
        { list: "Professional support for leasing residential and commercial spaces, ensuring a smooth leasing process.", id: "3" },
    ]
    return (
        <>
            <Container className="pt-5">
                <Row>
                    <h6>TOP INTERNATIONAL REAL ESTATE MANAGEMENT - L.L.C</h6>
                    <h1 className=" mb-4">Our Story</h1>
                    <Col md={6}>
                        <p>Since our bussiness established in 2013, we are passionate about delivering top-notch real estate services. With years of industry experience, our team is committed to helping you achieve your real estate goals. We offer a range of services designed to make your property journey seamless and successful. Our client-focused approach ensures that you receive personalized attention and expert advice every step of the way.</p>
                    </Col>
                    <Col md={6}>

                        <ul>
                            {aboutUsList && aboutUsList.map((data) => {
                                return <li key={data.id}>{data.list}</li>
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
