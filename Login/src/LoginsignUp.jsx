import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

import "./LoginForm.css";
function LoginsignUP() {
  const [isLoading, setLoading] = useState(false);

  const [login, setlogin] = useState(true);

  useEffect(() => {
    function ButtonLoading() {
      return new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
    }

    if (isLoading) {
      ButtonLoading().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <Button
            variant="outline-primary"
            className={login ? "active" : ""}
            onClick={() => setlogin(true)}
          >
            Login
          </Button>
          <Button
            variant="outline-primary"
            className={login ? "active" : ""}
            onClick={() => setlogin(false)}
          >
            SignUp
          </Button>
        </div>
        {login ? (
          <>
            <Form>
              <center>
                <h3>Login</h3>
              </center>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email ID</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <a href="#">Forget Password?</a>
              <br />
              <Button
                className="button"
                variant="danger"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "Login"}
              </Button>
              <p>
                Not a member?{" "}
                <a href="#" onClick={() => setlogin(false)}>
                  SignUp
                </a>
              </p>
            </Form>
          </>
        ) : (
          <>
            <Form>
              <center>
                <h3>SignUp</h3>
              </center>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label> Enter Email </Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder=" Create Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label> Confirm Password</Form.Label>
                <Form.Control type="password" placeholder=" Confirm Password" />
              </Form.Group>
              <Button
                className="button"
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}
              >
                {isLoading ? "Loading…" : "SignUp"}
              </Button>
            </Form>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginsignUP;
