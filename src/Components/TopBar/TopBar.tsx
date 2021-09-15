import "./TopBar.css";
import { Search } from "@material-ui/icons";
export default function TopBar() {
  return (
    <div className="topBarContainer top">
      <div className="topBarLeft top">
        <span className="topBarLogo">E-Fandray</span>
      </div>
      <div className="topBarCenter">
        <div className="topBarIconContainer top">
          <div className="iconItem">
            <p className="topBarMenu">Home</p>
          </div>
          <div className="iconItem">
            <p className="topBarMenu">News Feed</p>
          </div>
          <div className="iconItem">
            <p className="topBarMenu">Notifications</p>
          </div>
        </div>
      </div>
      <div className="topBarRight top">
        <p className="profilName">Aleck ASTAN</p>
        <img src="/assets/images/profil.jpg" alt="" className="topBarImage" />
      </div>
    </div>
  );
}
