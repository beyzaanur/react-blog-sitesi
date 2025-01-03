import React from 'react';
import { Helmet } from 'react-helmet';
import { Card,Container} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { NavLink } from 'react-bootstrap';


function Profile() {
  return (
    <ul>
      <div className='profile' >
        <Helmet>
          <title>Profil</title>
        </Helmet>
        <Container>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '7rem' }}>
            <Card style={{ marginRight: '10rem', marginBottom:'25rem',width: '450px', height: '500px', border: 'solid 2px' }}>
              <Card.Img variant="top" src="/fotolar/hutao.jpg" />
              <Card.Body>
                <Card.Title style={{ fontSize: '24px', textAlign: 'center' }}>ADMIN: DAISICAL</Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>

            <Accordion defaultActiveKey="0" style={{ width: '700px' , height:'50rem' , marginTop:'6rem' }}>
              <Accordion.Item eventKey="0" style={{fontSize:'24px'}}>
                <Accordion.Header style={{fontSize:'24px'}}>ADMIN</Accordion.Header>
                <Accordion.Body>
                  Kullanıcı adı: Daisical
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" style={{fontSize:'24px'}}>
                <Accordion.Header>Hesap Bilgileri</Accordion.Header>
                <Accordion.Body>
                  Mail: asd@asd
                  <br/>
                  Sifre:***
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" style={{fontSize:'24px'}}>
                <Accordion.Header>Postlarım</Accordion.Header>
                <Accordion.Body>
                  <NavLink href="/edit" >EDIT</NavLink>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </div>
    </ul>
  );
}

export default Profile;
