import { Col, Container, Image, Row } from "react-bootstrap"
import chooseUsImg from "../../assets/choseUsImg.avif"
import { DoneOutline } from "@mui/icons-material";
export default function ChoseUs() {
    const choseSecLi = [
        { paragraph: "Our team has years of experience in the real estate industry, ensuring you receive knowledgeable and reliable advice.", id: "1" },
        { paragraph: "We take the time to understand your needs and provide tailored solutions that meet your specific requirements.", id: "2" },
        { paragraph: "From property management to buying, selling, and leasing, we offer a full range of services to cover all your real estate needs.", id: "3" },
        { paragraph: "Your satisfaction is our top priority. We are committed to providing exceptional customer service and support.", id: "4" },
        { paragraph: "Our success is reflected in the positive outcomes and long-term relationships we have built with our clients.", id: "5" },
        { paragraph: "We use the latest technology and market insights to provide you with innovative and effective real estate solutions.", id: "6" },
        { paragraph: "We prioritize transparency and integrity in all our dealings, ensuring you can trust us with your real estate investments.", id: "7" },
        { paragraph: "Our network of industry professionals and partners allows us to offer you the best opportunities and deals in the market.", id: "8" }
    ];

    return (
        <>
            {/* chose us */}
            <Container className="pt-5">
                <h6 className="text-center">Why Us?</h6>
                <h1 className="text-center">Why Chose Us?</h1>
                <Row className="justify-content-center choseUsSection">
                    <Col md={9}>
                        <p className="text-center">Choosing the right real estate partner can make all the difference. Here at TOP INTERNATIONAL REAL ESTATE MANAGEMENT - L.L.C, we stand out for several reasons.</p>
                    </Col>
                    <Col md={4} >
                        <div>
                            {choseSecLi && choseSecLi.slice(0, 4).map((data) => {
                                return <li key={data.id} style={{ listStyle: "none" }} className="mt-4"><DoneOutline className="me-2 choseListIcon" />{data.paragraph}</li>
                            })}
                        </div>
                    </Col>
                    <Col md={4} className="mt-4"><Image src={chooseUsImg} alt="" fluid /></Col>
                    <Col md={4} >
                        <div>
                            {choseSecLi && choseSecLi.slice(4).map((data) => {
                                return <li key={data.id} style={{ listStyle: "none" }} className="mt-4"><DoneOutline className="me-2 choseListIcon" />{data.paragraph}</li>
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
