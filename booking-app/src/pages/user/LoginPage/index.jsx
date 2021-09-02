import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LoginPage.scss";
import { IMAGES } from "constants/images.constants";
import history from "utils/history";
import { ROUTER_URL } from "constants/index";
import { useEffect } from "react";

const { TabPane } = Tabs;

LoginPage.propTypes = {};

function LoginPage(props) {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({ activeTab: "1" });
  useEffect(() => {
    if (history.location.pathname === ROUTER_URL.REGISTER)
       setState( {activeTab:"2"});
  }, []);
  function handleChangeTab(activeKey) {
    setState({ activeTab: activeKey });
    if (activeKey == "1") {
      //tab 1 login
      history.replace(ROUTER_URL.LOGIN);
    } else {
      //tab 2 register
      history.replace(ROUTER_URL.REGISTER);
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__side"></div>

        <div className="login__content">
          <div className="login__content__logo">
            <Link to={ROUTER_URL.HOME}>
              <img src={IMAGES.LOGO} alt="Logo is not imported!" />
            </Link>
          </div>

          <Tabs defaultActiveKey={state.activeTab} activeKey={state.activeTab} onChange={handleChangeTab}>
            <TabPane tab={t("Login")} key="1">
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ remember: true }}
                onFinish={() => null}
              >
                <Form.Item
                  name="email"
                  hasFeedback
                  rules={[
                    { type: "email", message: `${t("Email is not valid!")}` },
                    { required: true, message: `${t("Please enter a valid email!")}` },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  hasFeedback
                  rules={[{ required: true, message: `${t("Please enter a valid password!")}` }]}
                >
                  <Input.Password placeholder={t("Password")} />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>{t("Remember me")}</Checkbox>
                </Form.Item>

                <div
                  style={{
                    display: "inline-block",
                    marginBottom: 24,
                  }}
                >
                  {t("You don't have an account?")}&nbsp;
                  <Link to="/login" onClick={() => handleChangeTab("2")}>
                    {t("Register now")}
                  </Link>
                </div>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    {t("Login")}
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>

            <TabPane tab={t("Register")} key="2">
              <Form
                name="basic"
                layout="vertical"
                initialValues={{ agree: true }}
                onFinish={() => null}
              >
                <Form.Item
                  name="name"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: `${t("Please enter a valid first name!")}`,
                    },
                  ]}
                >
                  <Input placeholder={t("Full name")} />
                </Form.Item>

                <Form.Item
                  name="phone"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: `${t("Please enter a valid phone!")}`,
                    },
                    {
                      pattern: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                      message: `${t("Phone number is not valid!")}`,
                    },
                  ]}
                >
                  <Input placeholder={t("Phone")} />
                </Form.Item>

                <Form.Item
                  name="email"
                  hasFeedback
                  rules={[
                    { required: true, message: `${t("Please enter a valid email!")}` },
                    { type: "email", message: `${t("Email is not valid!")}` },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: `${t("Please enter a valid password!")}`,
                    },
                    { min: 6, message: `${t("Must be a minimum of 8 characters")}` },
                  ]}
                >
                  <Input.Password placeholder={t("Password")} />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: `${t("Please confirm your password!")}`,
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error(`${t("The two passwords do not match!")}`));
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder={t("Confirm")} />
                </Form.Item>

                <Form.Item name="agree" valuePropName="checked">
                  <Checkbox>
                    {t("I have read and agreed to")}
                    <Link to="/term">{t(" the terms")}</Link>
                  </Checkbox>
                </Form.Item>

                <div
                  style={{
                    display: "inline-block",
                    marginBottom: 24,
                  }}
                >
                  {t("You have an account?")}&nbsp;
                  <Link to="/login" onClick={() => handleChangeTab("1")}>
                    {t("Login")}
                  </Link>
                </div>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    {t("Register")}
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
