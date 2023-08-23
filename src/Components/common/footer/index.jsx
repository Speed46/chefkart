import React from 'react';
import "./footer.css";

const Footer = () => {
  // return (
  //   <div className='text-center my-5'>
  //     <strong>Made with <i className="heart fa-solid fa-heart fa-beat"></i> by Abhijit Mandal</strong>
  //   </div>
  // )
  return (
    <section>
      <div className="container">
        <footer id="footer">
          <a href="https://github.com/Speed46">
            <i class="social-icon fa-brands fa-github "></i>
          </a>
          <a href="https://www.instagram.com/in/">
            <i class="social-icon fa-brands fa-instagram "></i>
          </a>
          <a href="https://www.linkedin.com/in/kousikb1/">
            <i class="social-icon fa-brands fa-linkedin "></i>
          </a>
          <a href="mailto:bollapragadakousik46@gmail.com">
            <i class="social-icon fa-solid fa-envelope "></i>
          </a>
          <p>
            Made with <i id="heart" class="fa-solid fa-heart fa-beat"></i> by <strong>kousik</strong>
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Footer;