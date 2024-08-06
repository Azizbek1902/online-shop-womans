import React from "react";
import { Wrapper } from "./style";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <Wrapper>
        <div className="login">
          <div className="title font_family">Kirish</div>
          <Input className="item" placeholder="Login" />
          <Input className="item" placeholder="Parol" />
          <Button size="large" type="primary" className="log">
            Kirish
          </Button>
          <p className="create" onClick={() => navigate("/registration")}>
            Akkaunt yaratish !
          </p>
        </div>
      </Wrapper>
    </div>
  );
}

export default Login;
