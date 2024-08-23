import { Card, Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import userImg1 from "../../assets/nadeem Technic Mentors.webp"
import userImg2 from "../../assets/Hadeed.webp"
import userImg3 from "../../assets/Ata img.webp"
export default function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4200,
    };
    const testimonials = [
        { heading: "Nadeem Munir", subHeading: "CEO Technic Mentors", content: "Top International Real Estate Management LLC has been an absolute game-changer for our property investments. Their expertise and dedication are unparalleled. From the moment we started working with them, we felt confident that our properties were in the best hands. Their team is incredibly responsive, professional, and always goes above and beyond to meet our needs. We highly recommend their services to anyone looking for reliable and top-tier real estate management!", img: userImg1, id: "1" },
        { heading: "Hadeed Ul Hassan", subHeading: "Emirates Tech Solutions", content: "Working with Top International Real Estate Management LLC has been a seamless experience. They have managed our properties with such care and attention to detail, ensuring everything runs smoothly. Their proactive approach and thorough understanding of the market have significantly increased the value of our investments. We are beyond satisfied with their service and would not hesitate to recommend them to others.", img: userImg2, id: "2" },
        { heading: "Ata Ur Rehman", subHeading: "Cambridge Innovations Ltd", content: "Top International Real Estate Management LLC stands out as a beacon of excellence in the real estate industry. Their commitment to delivering exceptional service is evident in every interaction. The team is not only knowledgeable but also incredibly supportive, making the entire process stress-free for us. They have truly earned our trust, and we are grateful to have them as our real estate management partners.", img: userImg3, id: "3" }
    ]
    return (
        <>
            {/* <Container fluid className="mt-5 testimonial"> */}
            <Container fluid className="mt-5">
                {/* <div className="testimonial-overlay"> */}
                <div>
                    <Slider {...settings} className="slider-container slider-container-testi">
                        {testimonials && testimonials.map((data) => {
                            return <Card key={data.id} className="testimonialCard" style={{ overflow: "visible" }}>
                                <FontAwesomeIcon icon={faQuoteLeft} className="quoteLeft"> </FontAwesomeIcon>
                                <div className="d-flex justify-content-center testiImgDiv">
                                    <Image className="testimonialImg" src={data.img}></Image>
                                </div>
                                <Card.Body>
                                    <Card.Text>
                                        <p className="text-center">{data.content}</p>
                                    </Card.Text>
                                    <Card.Title className="text-center">{data.heading}</Card.Title>
                                    <Card.Subtitle className="text-center" style={{ fontSize: "13px" }}>{data.subHeading}</Card.Subtitle>
                                    <FontAwesomeIcon icon={faQuoteRight} className="quoteRight"> </FontAwesomeIcon>
                                </Card.Body>
                            </Card>
                        })}
                    </Slider>
                </div>
            </Container>
        </>
    )
}
