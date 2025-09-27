import { Fragment } from "react";
import {
  Row,
  Col,
  Image,
  Card,
  CardBody,
  Form,
  FormLabel,
  FormControl,
  FormCheck,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
  IconEyeOff,
} from "@tabler/icons-react";

// Import custom components
import Flex from "../../components/common/Flex";
import { getAssetPath } from "../../helper/assetPath";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // Add your sign-in logic here
    console.log("Sign In button clicked");
    navigate("/dashboard"); // Redirect to the dashboard after sign-in
  };

  return (
    <Fragment>
      <Row className="mb-8">
        <Col xl={{ span: 4, offset: 4 }} md={12}>
          <div className="text-center">
            <a
              href="/"
              className="fs-2 fw-bold d-flex align-items-center gap-2 justify-content-center mb-6"
            >
              <Image src={getAssetPath("/images/brand/logo/logo-icon.svg")} alt="Dasher" />
              <span>XOITT CRM</span>
            </a>
            <h1 className="mb-1">Welcome Back</h1>
          </div>
        </Col>
      </Row>

      {/* Form Start */}
      <Row className="justify-content-center">
        <Col xl={5} lg={6} md={8}>
          <Card className="card-lg mb-6">
            <CardBody className="p-6">
              <Form className="mb-6">
                <div className="mb-3">
                  <FormLabel htmlFor="signinEmailInput">
                    Email <span className="text-danger">*</span>
                  </FormLabel>
                  <FormControl type="email" id="signinEmailInput" />
                </div>
                <div className="mb-3">
                  <FormLabel htmlFor="formSignUpPassword">Password</FormLabel>
                  <div className="password-field position-relative">
                    <FormControl
                      type="password"
                      id="formSignUpPassword"
                      className="fakePassword"
                    />
                    <span>
                      <IconEyeOff className="passwordToggler" size={16} />
                    </span>
                  </div>
                </div>
                <Flex
                  className="mb-4"
                  alignItems="center"
                  justifyContent="between"
                >
                  <FormCheck label="Remember me" type="checkbox" />
                  <div>
                    <a href="/forgot-password" className="text-primary">
                      Forgot Password
                    </a>
                  </div>
                </Flex>
                <div className="d-grid">
                  <Button variant="primary" type="button" onClick={handleSignIn}>
                    Sign In
                  </Button>
                </div>
              </Form>

              <span>Sign in with your social network.</span>
              <Flex justifyContent="between" className="mt-3 d-flex gap-2">
                <Button href="#" variant="google" className="w-100">
                  <span className="me-3">
                    <IconBrandGoogleFilled size={18} />
                  </span>
                  Continue with Google
                </Button>
                <Button href="#" variant="facebook" className="w-100">
                  <span className="me-3">
                    <IconBrandFacebookFilled size={18} />
                  </span>
                  Continue with Facebook
                </Button>
              </Flex>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <div className="text-center">
            <p className="mb-0">
              Don’t have an account yet?
              <a href="/signup" className="text-primary ms-1">
                Sign Up
              </a>
            </p>
            </div>
      </Row>
    </Fragment>
  );
};

export default SignIn;