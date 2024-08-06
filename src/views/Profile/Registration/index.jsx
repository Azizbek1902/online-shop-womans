import React from "react";
import { Wrapper } from "./style";
import { Button, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const { Option } = Select;

function Registration() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      province: "",
      region: "",
      category: "",
      desc: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/profile");
    },
  });
  return (
    <div>
      <Wrapper>
        <form className="login" onSubmit={formik.handleSubmit}>
          <div className="title font_family">Registratsiya</div>
          <Input
            className="item"
            placeholder="Ism"
            name="firstName"
            id="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
          <Input
            className="item"
            placeholder="Familya"
            name="lastName"
            id="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
          <Input
            className="item"
            placeholder="Ota onasini ismi"
            name="middleName"
            id="middleName"
            value={formik.values.middleName}
            onChange={formik.handleChange}
          />
          <Select
            placeholder="Shahar"
            className="item"
            name="province"
            id="province"
            value={formik.values.province || undefined}
            onChange={(value) => formik.setFieldValue("province", value)}
          >
            <Option value="1">Fergana</Option>
            <Option value="2">Andijon</Option>
            <Option value="3">Navoiy</Option>
          </Select>
          <Select
            placeholder="Tuman"
            className="item"
            name="region"
            id="region"
            value={formik.values.region || undefined}
            onChange={(value) => formik.setFieldValue("region", value)}
          >
            <Option value="1">Rishton</Option>
            <Option value="2">Quvasoy</Option>
            <Option value="3">Bag'dod</Option>
          </Select>
          <Select
            placeholder="Turi"
            name="category"
            id="category"
            className="item"
            value={formik.values.category || undefined}
            onChange={(value) => formik.setFieldValue("category", value)}
          >
            <Option value="1">Kiyimlar</Option>
            <Option value="2">Gullar</Option>
            <Option value="3">Atirlar</Option>
          </Select>
          <Input
            className="item"
            placeholder="Ma'lumot"
            name="desc"
            id="desc"
            value={formik.values.desc}
            onChange={formik.handleChange}
          />
          <Button size="large" htmlType="submit" type="primary" className="log">
            Ro'yxatdan o'tish
          </Button>
          <p className="create" onClick={() => navigate("/login")}>
            Menda akkaunt mavjud !
          </p>
        </form>
      </Wrapper>
    </div>
  );
}

export default Registration;
