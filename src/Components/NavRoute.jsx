import { useEffect, useRef, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import realEstateLogo from "../assets/top international logo.avif"
export default function NavRoute() {
  const { pathname } = useLocation()
  const [expand, setExpand] = useState(false)
  const navRef = useRef()

  const isLinkActive = (path) => {
    if (pathname === path) {
      return "active"
    }
  }

  const navRoutes = [
    { name: "Home", path: "/", id: "0" },
    { name: "About", path: "/about", id: "1" },
    { name: "Team", path: "/team", id: "2" },
    { name: "Services", path: "/services", id: "3" },
    { name: "Contact", path: "/contact", id: "4" },
  ]

  useEffect(() => {
    const closeNavbar = (e) => {
      if (!e.target.closest('.navbar-collapse') && !e.target.closest('.navbar-toggler')) {
        setExpand(false);
      }
    }
    document.addEventListener("click", closeNavbar)
    return (() => {
      document.removeEventListener("click", closeNavbar)
    })

  }, [pathname])

  return (
    <>
      <Navbar collapseOnSelect expand="lg" expanded={expand} className="navbarBg" ref={navRef}>
        <Container fluid className="px-lg-5 px-3">
          <Navbar.Brand className="navBrand" as={Link} to="/">
            <Image src={realEstateLogo} fluid className="realEstateLogo"></Image>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggleBtn" onClick={() => setExpand(!expand)} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {navRoutes && navRoutes.map((data) => {
                return <Nav.Link key={data.id} as={Link} to={data.path} className={`navLink me-2 ${isLinkActive(data.path)}`} onClick={() => setExpand(false)}>{data.name}</Nav.Link>
              })}
            </Nav>
            <Button as={Link} to="/contact" className="btnNav">Get Consultancy</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </ >
  );
}
