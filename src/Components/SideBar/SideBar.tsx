import "./SideBar.css";
import {
  Group,
  Home,
  RssFeed,
  Settings,
  Event,
  Person,
} from "@material-ui/icons";
import { groupEnd } from "console";
export default function SideBar() {
  return (
    <div className="sideBar">
      <ul className="sideBarList">
        <li className="sideBarListItem">
          <Home className="sideBarItemIcon" />
          <span className="sideBarItemText">Home</span>
        </li>
        <li className="sideBarListItem">
          <RssFeed className="sideBarItemIcon" />
          <span className="sideBarItemText">Feed</span>
        </li>
        <li className="sideBarListItem">
          <Settings className="sideBarItemIcon" />
          <span className="sideBarItemText">Settings</span>
        </li>
        <li className="sideBarListItem">
          <Event className="sideBarItemIcon" />
          <span className="sideBarItemText">Event</span>
        </li>
        <p>RABARINIRINA Antsa Judicaël</p>
        <p>IMTICIA 3 n°9</p>
      </ul>
    </div>
  );
}
