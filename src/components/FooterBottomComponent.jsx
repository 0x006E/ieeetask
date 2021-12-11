import { ReactComponent as FacebookLogo } from "../images/facebook.svg";
import { ReactComponent as GithubLogo } from "../images/github.svg";
import { ReactComponent as LinkedinLogo } from "../images/linkedin.svg";
import { ReactComponent as TwitterLogo } from "../images/twitter.svg";
import "./css/FooterBottomComponent.css";

const FooterBottom = () => {
  return (
    <div className="footer-last">
      <div className="socialIcons">
        <TwitterLogo alt="twitter" height="25" fill="currentColor" />
        <FacebookLogo alt="twitter" height="25" fill="currentColor" />
        <LinkedinLogo alt="twitter" height="25" fill="currentColor" />
        <GithubLogo alt="twitter" height="25" fill="currentColor" />
      </div>
      <div className="copyright">
        &copy; 2077 Untitled UI. All rights reserved.
      </div>
    </div>
  );
};
export default FooterBottom;
