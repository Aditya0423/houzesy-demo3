import React from "react";
import "./cardGallery.scss";
import Card from "./card";
import cardDate from "./cardData";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export default function CardGallery(props) {
  return (
    <>
      <div className="wraper">
        <div className="cardGalleryHeading">
          <CloseRoundedIcon
            className="cardGalleryCrossBtn"
            sx={{
              fontSize: "30px",
              color: "#DFDFDE",
              "&:hover": {
                color: "#151D3B"
              }
            }}
            onClick={props.handleVisiblity}
          />
          <h2>Room Design Gallery</h2>
          <div className="card-gallery-footer"></div>
        </div>
        <div className="cardGalleryContainer">
          {cardDate.map((item, index) => {
            return (
              <>
                <Card
                  key={index}
                  src={item.imgURL}
                  name={item.name}
                  area={item.area}
                  ratings={item.ratings}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
