import React, { useEffect } from 'react';
import { Row, Col, Button, Input, message } from 'antd';
import styles from './Signin.module.css';
import { withRouter } from 'react-router-dom';

const Signin = ({ history, loading, error, loginThunk }) => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  useEffect(() => {
    if (error === null) return;
    const code = error.response.data.error;
    if (code === 'USER_NOT_EXIST') {
      message.error('없는 유저');
    } else if (code === 'PASSWORD_NOT_MATCH') {
      message.error('비번 틀림');
    } else {
      message.error('언노운 에러');
    }
  }, [error]);

  return (
    <form>
      <Row align="middle" className={styles.signin_row}>
        <Col span={24}>
          <Row className={styles.signin_contents}>
            <Col span={12}>
              <img
                src="/bg_signin.png"
                alt="Signin"
                className={styles.signin_bg}
              />
            </Col>
            <Col span={12}>
              <div className={styles.signin_title}>LOGIN</div>
              <div className={styles.signin_subtitle}>
                Please Note Your Opinion
              </div>
              <div className={styles.signin_underline} />
              <div className={styles.email_title}>
                Email
                <span className={styles.required}> *</span>
              </div>
              <div className={styles.input_area}>
                <Input
                  placeholder="Email"
                  autoComplete="email"
                  name="email"
                  className={styles.input}
                  ref={emailRef}
                />
              </div>
              <div className={styles.password_title}>
                Password
                <span className={styles.required}> *</span>
              </div>
              <div className={styles.input_area}>
                <Input
                  type="password"
                  autoComplete="current-password"
                  className={styles.input}
                  ref={passwordRef}
                />
              </div>
              <div className={styles.button_area}>
                <Button
                  size="large"
                  loading={loading}
                  onClick={click}
                  className={styles.button}
                >
                  Sign In
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  );

  async function click() {
    const email = emailRef.current.state.value;
    const password = passwordRef.current.state.value;

    loginThunk(email, password);
  }
};

export default withRouter(Signin);
