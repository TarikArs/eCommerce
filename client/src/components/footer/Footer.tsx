import "./footer.css";
export default function Footer() {
  return (
    <div className="footer d-flex">
      <div className="footer-left col 3">
        <div className="footer-left-logo">
          <img className="logo" src="./assets/logo.png" alt="logo" />
        </div>
        <div className="footer-left-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
            libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et
            lectus vel ut sollicitudin elit at amet.
          </p>
        </div>
        <div className="footer-left-buttons">
          <img
            className="footer-left-buttons-img"
            src="./assets/apple.png"
            alt="Apple"
          />
          <img
            className="footer-left-buttons-img"
            src="./assets/google-paly.png"
            alt="Google play"
          />
        </div>
      </div>
      <div className="footer-center-1 col 3">
        <div className="footer-center-title">
          <h2>About us</h2>
        </div>
        <div className="footer-center-list">
          <ul className="ul-footer">
            <li>Careers</li>
            <li>Our Stores</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>
      </div>
      <div className="footer-center-1 col 3">
        <div className="footer-center-title">
          <h2>Customer Care</h2>
        </div>
        <div className="footer-center-list">
          <ul className="ul-footer">
            <li>How to buy</li>
            <li>Help center</li>
            <li>Track your Order</li>
            <li>Returns & refunds</li>
          </ul>
        </div>
      </div>
      <div className="footer-right col 3">
        <div className="footer-center-title">
          <h2>Contact Us</h2>
          <p>70 Washington Square South, New York, NY 10012, United States</p>
          <p>Email: uilib.help@gmail.com</p>
          <p>Phone: +1 1123 456 780</p>
        </div>
      </div>
    </div>
  );
}
