import React from 'react'
import { Helmet } from 'react-helmet'
import { useState } from 'react';
import { Carousel , NavLink} from 'react-bootstrap';


var resimData = [
  {
    id:1,
    image:require('Pictures/sehir.jpg'),
    title: 'WELCOME',
    description:'Yabure kabure no yabuisha ga'
  },
  {
    id:2,
    image:require('Pictures/anime.jpg'),
    title: 'TO',
    description:'Takeyabu no naka e sutta kora sa'
  },
  {
    id:3,
    image:require('Pictures/demonslayer.jpg'),
    title: 'ANIME',
    description:'Yabu karaboni sutta kora sa'
  },
  {
    id:4,
    image:require('Pictures/forest.png'),
    title: 'WORLD!!',
    description:'Nyan! Nyanpasu!!'
  },
]


function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    console.log('selected index:', selectedIndex)
    setIndex(selectedIndex);
  };

 
    return (
      <>
      <section id='resim' className='home' >
        <Helmet>
          <title>Anasayfa</title>
        </Helmet>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {
            resimData.map(resim =>{
              return(
                <Carousel.Item key = {resim.id} style={{height:'40rem'}}>
                <img 
                 className='d-block w-100'
                 src={resim.image}
                 alt={"slide" + resim.id}
                 style={{height:'40rem'}}

                  />

                <Carousel.Caption>
                  <NavLink href='/postlar' style={{fontSize:'50px'}}>{resim.title}</NavLink>
                  <p style={{fontSize:'30px'}}>{resim.description}</p>
                </Carousel.Caption>
              </Carousel.Item>

              )
            })
          }

    </Carousel>


   </section>
   </>

    )
}

export default Home