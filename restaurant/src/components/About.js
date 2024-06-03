import React from 'react'
import Footer from './Footer'
import styled from 'styled-components'

const FooterContainer=styled.div`
display: flex;
flex-direction: row;
background-color: black;
color: white;
padding: 5rem;
justify-content: space-between;
align-items: center;
`
const Header=styled.div`
display:flex;
justify-content:center;
align-items:center;
font-size:3rem;

`

function About() {
  return (
    <div>
      <Header>About Us</Header>

         <div className='aboutpage'>
      <div className='aboutimage'>
      <img src='./image/download (1).jpeg' alt='image'/>
      </div>
      <div className='aboutMore'>
        <h1>About our Restaurant</h1>
        {/* <h2>We provide Good quality food to our customers!!</h2> */}
        <p>Welcome to CeeJay Restaurant, where every meal is an experience crafted with passion and dedication. Located in the vibrant heart of Nairobi, CeeJay Restaurant is your go-to destination for exceptional dining in an inviting atmosphere.
At CeeJay, we pride ourselves on delivering top-quality food that delights the senses and satisfies the soul. Our team of culinary artisans is dedicated to sourcing the freshest ingredients and transforming them into delectable dishes that leave a lasting impression.
But CeeJay is more than just a restaurant—it's a culinary journey. Our menu is a celebration of flavors from around the world, expertly curated to tantalize your taste buds and awaken your palate. From mouthwatering appetizers to indulgent entrees and decadent desserts, each dish is a masterpiece waiting to be savored.
Step inside CeeJay and you'll discover a warm and welcoming ambiance that sets the stage for an unforgettable dining experience. Whether you're celebrating a special occasion, enjoying a night out with friends, or simply treating yourself to a delicious meal, our friendly staff is here to ensure that your time with us is nothing short of extraordinary.
At CeeJay Restaurant, we are committed to exceeding your expectations at every turn. From our exceptional service to our dedication to quality, we go above and beyond to ensure that every visit leaves you craving more. Join us and experience the magic of CeeJay—where every meal is a masterpiece waiting to be discovered.</p>

            <button className='aboutbutton'>Learn More</button>
      </div>

    </div>
    <FooterContainer>
          <Footer/>
          </FooterContainer>
    </div>
 

  )
}

export default About