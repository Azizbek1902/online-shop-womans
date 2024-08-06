import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import React from "react";
import { Wrapper } from "./style";

function Footer() {
  return (
    <div>
      <Wrapper>
        <div className="card">
          <a
            href="https://t.me/otabek_developer"
            target="_blank"
            className="title"
          >
            @ Technobeck team
          </a>
          <div className="contact">
            <a className="item" href="https://t.me/" target="_blank">
              <FaTelegram />
              Telegram
            </a>
            <a
              className="item"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <RiInstagramFill />
              Instagram
            </a>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer;
