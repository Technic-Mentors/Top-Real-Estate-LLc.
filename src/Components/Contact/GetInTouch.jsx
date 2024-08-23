import { EmailOutlined, LocationOnOutlined, PhoneIphoneOutlined, PhoneOutlined } from "@mui/icons-material";
import { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import emailJs from "@emailjs/browser"
export default function GetInTouch() {
    const [successMessage, setSuccessMessage] = useState("")
    const contactInfo = [
        {
            content: "Mohammad Bin Zayed - ME 9 Abu Dhabi United Arab Emirates", id: "0", icon: <LocationOnOutlined className="contactIcon me-2" />
        },
        { content: "info@toprealestatellc.com", id: "1", icon: <EmailOutlined className="contactIcon me-2" /> },
        { content: "+971 50 7798535", id: "2", icon: <PhoneIphoneOutlined className="contactIcon me-2" /> },
        { content: "+971 50 7731361", id: "3", icon: <PhoneIphoneOutlined className="contactIcon me-2" /> },
        { content: "+971 26 747 250", id: "4", icon: <PhoneOutlined className="contactIcon me-2" /> }
    ]
    const formRef = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        const form = formRef.current
        const name = form.name.value
        const email = form.email.value
        const subject = form.subject.value
        const message = form.message.value
        const nameError = document.getElementById("nameError")
        const emailError = document.getElementById("emailError")
        const subjectError = document.getElementById("subjectError")
        const messageError = document.getElementById("messageError")

        !name ? nameError.innerText = "please enter name" : nameError.innerText = ""
        !email ? emailError.innerText = "please enter email" : emailError.innerText = ""
        !subject ? subjectError.innerText = "please enter subject" : subjectError.innerText = ""
        !message ? messageError.innerText = "please enter message" : messageError.innerText = ""

        if (!name || !subject || !email || !message) {
            return null;
        }

        const formDataMail = ({
            name, email, subject, message
        })
        emailJs.send("service_y76erme", "template_okwe46i", formDataMail, "h0bNiwhZhezurl4m7")
            .then(res => {
                setSuccessMessage("email send successfully")
                form.reset()
                setTimeout(() => {
                    setSuccessMessage("")
                }, (5000));
                console.log(res, 'send email successfully')
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <Container>
                <Row className="py-5 justify-content-center">
                    <Col md={12} className="text-center">
                        <h1>Reach Out To Us</h1>
                        <p>Have any query? Our support team is always there to respond you. Just drop a message here and we will get back to you.</p>
                    </Col>
                    <Col md={6} className="pt-4">
                        <Form onSubmit={sendEmail} ref={formRef}>
                            <Form.Control type="text" placeholder="Full Name" size="lg" name="name"></Form.Control>
                            <div id="nameError" className="text-danger"></div>
                            <Form.Control type="email" placeholder="Email" size="lg" className="mt-4" name="email"></Form.Control>
                            <div id="emailError" className="text-danger"></div>
                            <Form.Control type="text" placeholder="Subject" size="lg" className="mt-4" name="subject"></Form.Control>
                            <div id="subjectError" className="text-danger"></div>
                            <Form.Control as="textarea" placeholder="Message" rows={5} size="lg" className="mt-4" name="message"></Form.Control>
                            <div id="messageError" className="text-danger"></div>
                            {successMessage && <div className="bg-success mt-4"><p style={{ margin: "0" }} className="text-center text-white py-3">{successMessage}</p></div>}
                            <div className="d-flex justify-content-center mt-4">
                                <Button variant="primary" size="lg" type="submit">Submit</Button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={6}>
                        <Card className="mt-4 contactCard">
                            <h1 className="text-center mt-2">Contact Information</h1>
                            {contactInfo && contactInfo.map((data) => {
                                return <Card.Body key={data.id} className="d-flex">
                                    <div>
                                        {data.icon}
                                    </div>
                                    <div>
                                        <p>{data.content}</p>
                                    </div>
                                </Card.Body>
                            })}
                        </Card>
                    </Col>
                </Row>
            </Container>
            <h6 className="text-center">Locate Us</h6>
            <h1 className="text-center">Locate Us On Map</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7270.2257224032555!2d54.528472487793884!3d24.34256093813713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e4759f0386d5f%3A0x5fb4dbfde34cd442!2sMohamed%20Bin%20Zayed%20City%20-%20ME-9%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1722686992541!5m2!1sen!2s" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}
