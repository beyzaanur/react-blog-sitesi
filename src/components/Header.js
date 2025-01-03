import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';

function Header() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    navigate('/');
    toast.success('Çıkış başarılı', {
      theme: 'dark',
    });
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg='dark' variant='dark' sticky='top'>
        <Container>
          <Navbar.Brand href="/"><i className="nes-pokeball" ></i></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link href='/'>ANASAYFA</Nav.Link>
              <Nav.Link href='/postlar'>POSTLAR</Nav.Link>
              <Nav.Link href='/hakkında'>HAKKINDA</Nav.Link>
              <Nav.Link href='/test'>TESTLER</Nav.Link>

              {isAuthenticated && <Nav.Link href='/edit'>EDİT</Nav.Link>}
            </Nav>

            <Nav>

              {isAuthenticated ? (
                <>
                  <Nav.Link href='/profil'>PROFİL</Nav.Link>
                  <NavDropdown title="" id="collapsible-nav-dropdown" data-bs-theme="dark" style={{ marginRight: '3rem' }} >
                    <NavDropdown.Item onClick={handleLogout}>Çıkış yap</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link href='/giris'>GİRİŞ</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;









