import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function HomeHeader() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
    };

    const headers = [
        {
            headerClass: "homeHeader1",
            heading: "Your Trusted Real Estate Partner",
            subHeading: "TOP INTERNATIONAL REAL ESTATE MANAGEMENT - L.L.C",
            id: "1"
        },
        {
            headerClass: "homeHeader2",
            heading: "Expert Property Management",
            subHeading: "Comprehensive Solutions for Your Investment",
            id: "2"
        },
        {
            headerClass: "homeHeader3",
            heading: "Finds Your Dream Home",
            subHeading: "Personalized Service, Perfect Results",
            id: "3"
        }
    ];

    return (
        <>
            <Slider {...settings} className="slider-container">
                {headers && headers.map((data) => {
                    return <div key={data.id}>
                        <section className={data.headerClass}>
                            <div className="homeHeader-overlay">
                                <Container>
                                    <Row className="py-6 justify-content-center text-white">
                                        <Col md={7}>
                                            <h6 className="text-white text-center">{data.subHeading}</h6>
                                            <h1 className="text-white text-center homeHead">{data.heading}</h1>
                                            {/* <p className="text-center">{data.content}</p> */}
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </section>
                    </div>
                })}
            </Slider>

        </>
    )
}
