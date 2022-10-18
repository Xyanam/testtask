import React, { useState, useEffect } from "react";
import { Form, Button, Input, Row, Col, message } from "antd";

import { ROW_GUTTER } from "constants/ThemeConstant";
import { useHistory } from "react-router-dom";
import Flex from "components/shared-components/Flex";
import axios from "axios";
import Loading from "components/shared-components/Loading";

export const EditProfile = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users/${history.location.state.id}`
      )
      .then((resp) => {
        setUser(resp.data);
        setLoader(false);
      });
  }, []);

  const onFinish = (values) => {
    const key = "updatable";
    message.loading({ content: "Updating...", key });
    setTimeout(() => {
      message.success({ content: "Done!", key, duration: 2 });
      history.push("/app/pages/user-list");
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return loader ? (
    <Loading />
  ) : (
    <>
      <Flex
        alignItems="center"
        mobileFlex={false}
        className="text-center text-md-left"
      ></Flex>
      <div className="mt-4">
        <Form
          name="basicInformation"
          layout="vertical"
          initialValues={{
            name: user.name,
            email: user.email,
            username: user.username,
            phoneNumber: user.phone,
            website: user.website,
            address: user.address.street,
            city: user.address.city,
            postcode: user.address.zipcode,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phoneNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Address" name="address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Post code" name="postcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default EditProfile;
