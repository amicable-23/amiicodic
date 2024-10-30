import React from 'react'


function Footer() {
  return (
    <footer style={{backgroundColor:"black", color: "white"}} className='p-5'>
    <section className='container'>
        <div className='row'>
            <div className='col-md-3'>
              <div className='logo'>
                <img style={{height : "70px"}} src="icon.png" alt="logo" />
                <h4>Igbo Amaka</h4>
                <p>Learn Igbo and unlock the secrets of this ancient tongue, spoken by the Igbo people and uncover the wisdom of Igbo proverbs, the beauty of Igbo names and culture.</p>
              </div>

            </div>
           
            <div className='col-md-3'>
              <h5>Contact</h5>
              <ul className='list-unstyled'>
                <li>
                  <p>Location: Aina close Ikeja </p>
                </li>
                <br />
                <li>
                  <span>phone: 07016141178</span>
                </li>
                <br />
                <li>
                  <span>Email: nmesonwagbara@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className='col-md-3'>
              <h5>Newsletter</h5>
              <p>Subscribe to our newsletter</p>
              <div  className='position-relative'>
                <input className='form-control' type="email" placeholder='Enter your email'/>
               
                
              </div>
            </div>
        </div>
    </section>

    <section className='d-flex justify-content-around align-items-center'>
        <p style={{color:"red"}}>&copy; copyright- {new Date().getFullYear()}</p>
       

    </section>

</footer>
  )
}

export default Footer