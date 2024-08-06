import React, { useState } from "react";
import Carousel from "../../components/pages/home/Carousel";
import Filter from "../../components/pages/home/Filter";
import { Row, Container } from "./style";
import { filter, cards } from "./Data";
import Card from "../../components/pages/home/Card";

function Home() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [data, setData] = useState(cards);
  const hnadleChange = (id) => {
    setSelectCategory(id);
    if (id) {
      let newda = cards.filter((item) => item.category == id);
      setData(newda);
    } else {
      setData(cards);
    }
  };
  return (
    <div>
      <Carousel />
      <Filter
        data={filter}
        changed={selectCategory}
        hnadleChange={hnadleChange}
      />
      <Container>
        <Row>
          {data.map((item) => {
            return (
              <Card title={item.title} price={item.price} img={item.img} />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
