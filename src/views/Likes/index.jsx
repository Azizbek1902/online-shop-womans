import React, { useState } from "react";
import { Row, Container } from "./style";
import { likes } from "../Home/Data";
import Card from "../../components/pages/LIkesCard";

function Likes() {
  return (
    <div>
      <Container>
        <h1 className="titlew">Yoqtirganlar</h1>
        <Row>
          {likes.map((item) => {
            return (
              <Card title={item.title} price={item.price} img={item.img} />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Likes;
