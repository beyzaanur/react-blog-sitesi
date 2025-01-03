import Card from 'react-bootstrap/Card';
import React from 'react';
import blogData from 'components/Post/BlogList'
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';


function ImageAndTextExample() {
  const { id } = useParams();
  const item = blogData.find(post => post.id === +id);

  if (!item) {
    return <p>Post bulunamadı</p>;
  }
  return (
    <Container style={{ padding: '20px' }}>
      <div className="blog-wrapper">
        <Card key={item.id}
          className="blog-card"
          style={{ width: '120rem' }} >

          <Card.Img
            variant="top"
            src={item.image}
            style={{ height: '40rem', borderRadius: '5px' }} />

        </Card>

        <p
          style={{
            padding: '40px',
            textAlign: 'center',
            variant: 'top',
            marginBottom: '10rem',
            fontSize: '20px',
            width: '150rem'
          }}>

          <Card.Title
            style={{
              textAlign: 'center',
              fontSize: '3rem',
              padding: '10px',
              color: 'black',
              backgroundColor: 'darkgrey',
              borderRadius: '300rem',
              marginBottom: '30px'
            }}>{item.title}</Card.Title>
          {item.body}
        </p>
      </div>
    </Container>


  );
}

export default ImageAndTextExample;



