import "./Home.css";
import TopBar from "../../Components/TopBar/TopBar";
import SideBar from "../../Components/SideBar/SideBar";
import RightBar from "../../Components/RightBar/RightBar";
import Actu from "../../Components/Actu/Actu";
export default function Home() {
  return (
    <div className="Home">
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Actu />
        <RightBar />
      </div>
    </div>
  );
}
