import "./Share.css";
import { PermMedia, EmojiEmotions } from "@material-ui/icons";
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img src="/assets/images/profil.jpg" alt="" className="shareProfil" />
          <input
            type="text"
            className="shareInput"
            placeholder="What's On Your Mind?"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia className="shareOptionIcon" />
              <span className="shareOptionText">Photo Or Video</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions className="shareOptionIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <div className="shareButton">Share Now</div>
        </div>
      </div>
    </div>
  );
}
