import React, { useState } from 'react';
import { Card, CardText, Col, Container, Row } from 'react-bootstrap';
import blogData from 'components/Post/BlogList';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom'; 
import { Form, Button } from 'react-bootstrap';
import { BsSearchHeartFill } from "react-icons/bs";

const GridExample = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogData); 

  const handleSearch = (event) => {
    const searchValue = event.target.value;
    setSearchTerm(searchValue); 

    
    const filtered = blogData.filter((blog) =>
      blog.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  return (
    <Container >
      <Helmet>
        <title>Postlar</title>
      </Helmet>
      
      <div style={{alignItems:'center' , justifyContent:'center'}}>
      <Form className="d-flex mb-3" style={{background:'#c4c4c4' , borderRadius:'10px' ,padding:'5px' , marginTop:'8px'  }}>
        <Form.Control
        style={{textAlign:'center'}}
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          value={searchTerm}
          onChange={handleSearch}
          variant="outline-dark"
        />
        <Button
          className='butto'
          variant="outline-dark"
          onClick={handleClearSearch}
          style={{borderRadius:'40px'}}
        >   
          <BsSearchHeartFill style={{ fontSize: '20px' }} />
        </Button>
      </Form>
      </div>

      <Row xs={1} md={4} className="g-4">
        {filteredPosts.map((blog) => (
          <Col key={blog.id} style={{ padding: '8px' }}>
            <Card border="secondary" style={{ backgroundColor: '#c4c4c4', height: '35rem' }}>
              <Card.Img variant="top" src={blog.image} style={{ height: '25rem' }} />
              <Card.Body>
                <Card.Title style={{ color: 'darkred' }}>{blog.title}</Card.Title>
                <br />
                <Card.Text className="text-length">
                  {blog.body}
                </Card.Text>
                <CardText>
                  <NavLink to={`/post/${blog.id}`} style={{ color: 'indigo' }}>devamını oku</NavLink>
                </CardText>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GridExample;
