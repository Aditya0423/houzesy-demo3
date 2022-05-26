import React from "react";
import "./darkCard.scss";
export default function DarkCard() {
  const styles = {
    img1:
      "url(https://c4.wallpaperflare.com/wallpaper/973/1004/995/interior-design-room-carpets-couch-wallpaper-preview.jpg)",
    img2:
      "url(https://www.decoraid.com/wp-content/uploads/2021/04/Contemporary-Style-scaled.jpeg)",
    img3:
      "url(https://images.adsttc.com/media/images/58d3/ae2e/e58e/ce2e/d500/00cd/large_jpg/DSC6954.jpg?1490267663)"
  };

  return (
    <div className="dark-card-container">
      <div
        className="dark-card card-img1"
        style={{ backgroundImage: styles.img1 }}
      >
        <button className="dark-card-btn">
          <span>consectetur</span>
        </button>
      </div>
      <div
        className="dark-card card-img2"
        style={{ backgroundImage: styles.img2 }}
      >
        <button className="dark-card-btn">
          <span>numquam</span>
        </button>
      </div>
      <div
        className="dark-card card-img3"
        style={{ backgroundImage: styles.img3 }}
      >
        <button className="dark-card-btn">
          <span>laboriosam</span>
        </button>
      </div>
    </div>
  );
}
