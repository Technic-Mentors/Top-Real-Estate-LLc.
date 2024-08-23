import { Card, Col, Container, Row } from "react-bootstrap"
import { AccountBalanceOutlined, AssessmentOutlined, BuildOutlined, BusinessCenterOutlined, EmergencyShareOutlined, EngineeringOutlined, EscalatorOutlined, GavelOutlined, GroupOutlined, HomeWorkOutlined, PieChartOutline, TuneOutlined } from "@mui/icons-material"
import CallToAction from "../RepeatedComponent/CallToAction"

export default function OurServices() {
    const services = [
        { heading: "Property Management", paragraph: "We handle tenant screening, leasing, maintenance, and financial reporting to ensure your properties are well-maintained and profitable.", icon: <HomeWorkOutlined className="serviceIcon" />, id: "1" },
        { heading: "Leasing Services", paragraph: "Our professional leasing services include market analysis, marketing strategies, and tenant screening to ensure high occupancy rates.", icon: <BusinessCenterOutlined className="serviceIcon" />, id: "2" },
        { heading: "Facility Management", paragraph: "We oversee maintenance, repairs, and improvements to keep your properties in optimal condition and compliant with regulations.", icon: <BuildOutlined className="serviceIcon" />, id: "3" },
        { heading: "Financial Management", paragraph: "We provide budgeting, accounting, and financial reporting services to help you make informed decisions about your investments.", icon: <AccountBalanceOutlined className="serviceIcon" />, id: "4" },
        { heading: "Tenant Relations", paragraph: "We offer responsive tenant support to address concerns and resolve issues, ensuring tenant satisfaction and retention.", icon: <GroupOutlined className="serviceIcon" />, id: "5" },
        { heading: "Asset Management", paragraph: "We focus on maximizing the long-term value of your real estate portfolio through strategic planning and performance reviews.", icon: <AssessmentOutlined className="serviceIcon" />, id: "6" },
        {
            heading: "Market Research", paragraph: "We conduct thorough market research and analysis to provide insights into current trends and opportunities, helping you make strategic investment decisions.", icon: <PieChartOutline className="serviceIcon" />, id: "7"
        },
        {
            heading: "Legal Compliance", paragraph: "We ensure all aspects of property management comply with local, state, and federal regulations, minimizing legal risks and safeguarding your investments.", icon: <GavelOutlined className="serviceIcon" />, id: "8"
        },
        {
            heading: "Project Management",
            paragraph: "Our project management services cover renovations, upgrades, and new construction projects, ensuring timely completion and adherence to budget.",
            icon: <EngineeringOutlined className="serviceIcon" />,
            id: "9"
        },
        {
            heading: "Emergency Response",
            paragraph: "We provide 24/7 emergency response services to address urgent issues promptly, ensuring minimal disruption and protecting your property.",
            icon: <EmergencyShareOutlined className="serviceIcon" />,
            id: "10"
        },
        {
            heading: "Sustainability Initiatives",
            paragraph: "We implement sustainability practices to enhance energy efficiency and reduce environmental impact, contributing to long-term savings and eco-friendly operations.",
            icon: <EscalatorOutlined className="serviceIcon" />,
            id: "11"
        },
        {
            heading: "Custom Solutions",
            paragraph: "We offer tailored solutions to meet specific needs and objectives, providing personalized service that aligns with your unique property goals.",
            icon: <TuneOutlined className="serviceIcon" />,
            id: "12"
        }
    ]
    return (
        <>
            <Container className="pt-5 aboutServices">
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
                </Row>
            </Container >
            <CallToAction />
        </>
    )
}
