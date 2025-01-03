import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const TestSelection = ({ tests, onSelectTest }) => {
  return (
    <div className="container">
      <Row>
        {tests.map((test, index) => (
          <Col md={4} key={index} className="mb-4 d-flex justify-content-center">
            <Card style={{ width: '18rem', height: '20rem', margin: '1rem'  , marginBottom:'10rem' , marginTop:'5rem'}}>
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: 'center',
                    fontSize: '36px',
                    marginTop: '1rem',
                    backgroundColor: 'gray',
                    borderRadius: '5px',
                  }}
                >
                  {test.character}
                </Card.Title>
                <Card.Text style={{ fontSize: '24px', marginTop: '2rem', textAlign: 'center' }}>
                  {test.description}
                </Card.Text>
                <Button
                  variant="primary"
                  style={{ marginTop: '3rem', backgroundColor: 'darkred' }}
                  onClick={() => onSelectTest(test)}
                >
                  Testi Çöz
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default TestSelection;



