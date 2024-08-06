import React from "react";
import { Wrapper } from "./style";

function Filter({ data, hnadleChange, changed }) {
  return (
    <div>
      <Wrapper>
        <div className="filter">
          <h1 className="title font_family">
            Har qanday vaziyat uchun sovg'alar
          </h1>
          <div className="items">
            <div
              className="item font_family"
              style={{
                opacity: changed == null ? "1" : "0.4",
              }}
              onClick={() => hnadleChange(null)}
            >
              Hammasi
            </div>
            {data.map((item, i) => {
              return (
                <div
                  key={i + 1}
                  className="item font_family"
                  onClick={() => hnadleChange(item._id)}
                  style={{
                    opacity: changed == item._id ? "1" : "0.4",
                  }}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Filter;
