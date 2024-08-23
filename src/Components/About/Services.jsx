import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AccountBalanceOutlined, AssessmentOutlined, BuildOutlined, BusinessCenterOutlined, GroupOutlined, HomeWorkOutlined } from "@mui/icons-material"

export default function Services() {
    const services = [
        { heading: "Property Management", paragraph: "We handle tenant screening, leasing, maintenance, and financial reporting to ensure your properties are well-maintained and profitable.", icon: <HomeWorkOutlined className="serviceIcon" />, id: "1" },
        { heading: "Leasing Services", paragraph: "Our professional leasing services include market analysis, marketing strategies, and tenant screening to ensure high occupancy rates.", icon: <BusinessCenterOutlined className="serviceIcon" />, id: "2" },
        { heading: "Facility Management", paragraph: "We oversee maintenance, repairs, and improvements to keep your properties in optimal condition and compliant with regulations.", icon: <BuildOutlined className="serviceIcon" />, id: "3" },
        { heading: "Financial Management", paragraph: "We provide budgeting, accounting, and financial reporting services to help you make informed decisions about your investments.", icon: <AccountBalanceOutlined className="serviceIcon" />, id: "4" },
        { heading: "Tenant Relations", paragraph: "We offer responsive tenant support to address concerns and resolve issues, ensuring tenant satisfaction and retention.", icon: <GroupOutlined className="serviceIcon" />, id: "5" },
        { heading: "Asset Management", paragraph: "We focus on maximizing the long-term value of your real estate portfolio through strategic planning and performance reviews.", icon: <AssessmentOutlined className="serviceIcon" />, id: "6" }
    ]
    return (
        <>
            <Container className="pt-5 aboutServices">
                <h6 className="text-center">What We Offer</h6>
                <h1 className="text-center">Our Services</h1>
                <Row className="g-3">
                    {services && services.map((data) => {
                        return <Col key={data.id} md={4}>
                            <Card className="card" style={{ height: "100%" }}>

                                <Card.Body className="d-flex">
                                    <div>
                                        {data.icon}
                                    </div>
                                    <div className="serviceContent">
                                        <Card.Title className="d-flex align-items-center">
                                            <h4>{data.heading}</h4>
                                        </Card.Title>
                                        <Card.Text><p>{data.paragraph}</p></Card.Text>
                                    </div>
                                </Card.Body>

                            </Card>
                        </Col>
                    })}
                    <div className="d-flex justify-content-center">
                        <Button as={Link} to="/services" variant="primary" size="lg">Explore More</Button>
                    </div>
                </Row>
            </Container >
        </>
    )
}
