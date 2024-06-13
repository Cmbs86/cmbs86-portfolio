function Footer() {

  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
       
        <p className="copyright"> {currentYear}&copy; Carlos Sousa |  All Rights Reserved</p>
      </footer>
    </>
  );
}



export default Footer;
