import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column">
          <h4>ABOUT US</h4>
          <ul>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Company Details</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Affiliate</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>PRODUCTS</h4>
          <ul>
            <li>
              <a href="#">NFT Marketplace</a>
            </li>
            <li>
              <a href="#">Slingshot</a>
            </li>
            <li>
              <a href="#">Swaps</a>
            </li>
            <li>
              <a href="#">NFT Launchpad</a>
            </li>
            <li>
              <a href="#">Runes Platform</a>
            </li>
            <li>
              <a href="#">Creator Dashboard</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>RESOURCES</h4>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Feature Requests</a>
            </li>
            <li>
              <a href="#">Trust & Safety</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        <div className="footer-column contact">
          <h4>CONTACT US</h4>
          <ul>
            <li>
              <a href="mailto:support@tech.email">support@tech.email</a>
            </li>
            <li>
              <a href="mailto:affiliate@tech.com">affiliate@tech.com</a>
            </li>
          </ul>
          <div className="install-app">
            <img src="/install_app.png" alt="App Icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};
