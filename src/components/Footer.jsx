function Footer() {
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
        <p className="credit_links">
          "Coming soon" images by{" "}
          <a
            className="credits"
            href="https://unsplash.com/de/@fkaregan?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="blank"
          >
            Samuel Regan-Asante
          </a>{" "}
          on{" "}
          <a
            className="unsplash_link"
            href="https://unsplash.com/de/fotos/Rk8fHGGeyr8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            target="blank"
          >
            Unsplash
          </a>
          <br />
          "Watch this space image" designed by{" "}
          <a className="credits" href="http://www.freepik.com" target="_blank">
            starline / Freepik
          </a>
        </p>
        <p className="copyright">&copy; 2023 All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Footer;
