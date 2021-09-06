import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Form, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LoginPage.scss';
import { IMAGES } from 'constants/images.constants';


const { TabPane } = Tabs;

LoginPage.propTypes = {
  
};

function LoginPage(props) {
  const { t, i18n } = useTranslation();
  const [ state, setState] = useState({ activeTab: "1" });
  
  function handleChangeTab(activeKey) {
    setState({activeTab: activeKey});
  }
  
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__side"></div>
        
        <div className="login__content">
          <div className="login__content__logo">
            <img src={IMAGES.LOGO} alt="Logo is not imported!" />
          </div>

          <Tabs defaultActiveKey="1" 
            activeKey={state.activeTab}
            onChange={handleChangeTab}
          >
            <TabPane className="login-tab" tab={t("Login")} key="1">
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
                  <Input.Password placeholder={t("Password")} style={{ width: "100%" }} />
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

                  <Link className="login-link" to="/login" onClick={() => handleChangeTab("2")}>
                    {t("Register now")}
                  </Link>
                </div>

                <Form.Item>
                  <Button className="login-btn" type="primary" htmlType="submit" block>
                    {t("Login")}
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>

            <TabPane className="login-tab" tab={t("Register")} key="2">
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
                      message: `${t("Please enter a valid full name!")}`,
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
                  <Input.Password placeholder={t("Password")} style={{ width: "100%" }} />
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
                        return Promise.reject(
                          new Error(`${t("The two passwords do not match!")}`)
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder={t("Confirm")} style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item name="agree" valuePropName="checked">
                  <Checkbox>
                    {t("I have read and agreed to")}
                    <Link className="login-link" to="/term">{t(" the terms")}</Link>
                  </Checkbox>
                </Form.Item>

                <div
                  style={{
                    display: "inline-block",
                    marginBottom: 24,
                  }}
                >
                  {t("You have an account?")}&nbsp;
                  <Link className="login-link" to="/login" onClick={() => handleChangeTab("1")}>
                    {t("Login")}
                  </Link>
                </div>

                <Form.Item>
                  <Button className="login-btn" type="primary" htmlType="submit" block>
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