import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top__left">
            <h1 className="logo">morent</h1>
            <p className="footer__subtitle">
              Our vision is to provide convenience <br />
              and help increase your sales business.
            </p>
          </div>

          <div className="footer__top__right">
            <div className="footer__top__right__column">
              <div className="footer__top__right__column__title">About</div>
              <a href="#" className="footer__top__right__column__link">
                How it works
              </a>
              <a href="#" className="footer__top__right__column__link">
                Featured
              </a>
              <a href="#" className="footer__top__right__column__link">
                Partnership
              </a>
              <a href="#" className="footer__top__right__column__link">
                Bussiness Relation
              </a>
            </div>

            <div className="footer__top__right__column">
              <div className="footer__top__right__column__title">Community</div>
              <a href="#" className="footer__top__right__column__link">
                Events
              </a>
              <a href="#" className="footer__top__right__column__link">
                Blog
              </a>
              <a href="#" className="footer__top__right__column__link">
                Podcast
              </a>
              <a href="#" className="footer__top__right__column__link">
                Invite a friend
              </a>
            </div>

            <div className="footer__top__right__column">
              <div className="footer__top__right__column__title">Socials</div>
              <a href="#" className="footer__top__right__column__link">
                Discord
              </a>
              <a href="#" className="footer__top__right__column__link">
                Instagram
              </a>
              <a href="#" className="footer__top__right__column__link">
                Twitter
              </a>
              <a href="#" className="footer__top__right__column__link">
                Facebook
              </a>
            </div>
            <div className="footer__top__right__column"></div>
            <div className="footer__top__right__column"></div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom__copyright">
            ©2022 MORENT. All rights reserved
          </div>

          <div className="footer__bottom__links">
            <a href="#">Privacy & Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
