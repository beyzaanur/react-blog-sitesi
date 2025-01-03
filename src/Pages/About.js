import React from 'react'
import { Helmet } from 'react-helmet'

function About() {
  return (


    <section >
      <Helmet>
        <title>Hakkında</title>
      </Helmet>
      <section class="nes-container is-dark" style={{ height: '70rem' }}>
        <section class="message-list" style={{ marginTop: '5rem' }}  >
          <section class="message -left" style={{ height: '30rem', marginLeft: '3rem' }} >
            <i class="nes-bcrikko "  ></i>

            <div class="nes-balloon from-left is-dark" style={{ height: '20rem', width: '50rem' }}>

              <p style={{ fontSize: '28px' }}>
                <h2
                  style={{
                    textAlign: 'center',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    fontSize: '40px'
                  }}>HAKKINDA</h2>

                Bu blog, animeler hakkında paylaşımlar yapılmak üzere kurulmuştur.
                Amacımız tüm anime severlerin ilgiyle okuyabileceği güncel/geçmiş
                animelerin bölümleri ve karakterleri hakkında daha fazla konuşmaktır.</p>
            </div>
          </section>

          <section class="message -right" >

            <div class="nes-balloon from-right is-dark" style={{ height: '20rem', width: '50rem', marginLeft: '30rem' }}>

              <p style={{ fontSize: '28px' }}>
                <h2
                  style={{
                    textAlign: 'center',
                    marginBottom: '1rem',
                    marginTop: '1rem',
                    fontSize: '40px'
                  }} >ADMIN</h2>
                Merhaba! Ben daisical , mini bir anime lover.
                Bu blogta edindiğim anime haberlerini ve izlediğim animelerin
                kendimce yorumlarını paylaşacağım.</p>
            </div>
            <i class="nes-bcrikko"></i>
          </section>
        </section>
      </section>
    </section>



  )
}

export default About