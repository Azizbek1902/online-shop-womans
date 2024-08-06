import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { Wrap } from "./style";

function Card({ img, title, price }) {
  return (
    <div>
      <Wrap>
        <div className="card">
          <div className="hiden">
            <img src={img} alt="" className="img" />
          </div>
          <div className="text">
            <h1 className="title">
              {title?.length > 53 ? title?.slice(0, 53) + "..." : title}
            </h1>
            <div className="footer">
              <div className="buton_group">
                <button
                  className="btn"
                  onClick={() => {
                    alert("Oldin registratsiyadan o'ting ?");
                  }}
                >
                  <AiOutlineShopping
                    size={24}
                    style={{ backgroundColor: "transparent" }}
                  />
                </button>
                <button
                  className="btn2"
                  onClick={() => {
                    alert("Oldin registratsiyadan o'ting ?");
                  }}
                >
                  <AiOutlineHeart
                    size={24}
                    style={{ backgroundColor: "transparent" }}
                  />
                </button>
              </div>
              <h3 className="price">{price} so'm</h3>
            </div>
          </div>
        </div>
      </Wrap>
    </div>
  );
}

export default Card;
