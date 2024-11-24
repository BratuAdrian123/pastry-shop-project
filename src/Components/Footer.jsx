function Footer() {
  return (
    <div className="w-full relative bottom-0 footer">
      <div
        className="flex justify-around footer-content-container
       "
      >
        <div className="footer-contact ml-[10px]">
          <p className="text-lg">
            Email: <a href="pastryshop@gmail.com">pastryshop@gmail.com</a>
          </p>
          <p className="text-lg">Tel: 0799999999</p>
          <p className="text-lg">Tel: 0799999998</p>
        </div>
        <div className="footer-socials ml-[10px]">
          <p className="pb-2 mt-1">
            <a
              href="http://twitter.com"
              target="_blank"
              className="text-lg flex"
            >
              <img
                src="pictures/twitter.png"
                alt="twitter-icon"
                className="w-[22px]"
              />
              Twitter
            </a>
          </p>
          <p className="pb-2">
            <a
              href="http://facebook.com"
              target="_blank"
              className="text-lg flex"
            >
              <img
                src="pictures/facebook.png"
                alt="facebook-icon"
                className="w-[22px]"
              />
              Facebook
            </a>
          </p>
          <p className="pb-2">
            <a
              href="http://instagram.com"
              target="_blank"
              className="text-lg flex"
            >
              <img
                src="pictures/instagram.png"
                alt="instagram-icon"
                className="w-[22px]"
              />
              Instagram
            </a>
          </p>
        </div>
      </div>
      <p className="text-center">
        copyright <span className="text-lg">&copy;</span>{' '}
        {new Date().getFullYear()} all rights reserved
      </p>
    </div>
  );
}

export default Footer;
