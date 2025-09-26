"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useRouter } from 'next/navigation';

type FormData = {
  leadOwner: string;
  firstName: string;
  title: string;
  phone: string;
  mobile: string;
  leadSource: string;
  industry: string;
  annualRevenue: string;
  emailOptOut: boolean;
  company: string;
  lastName: string;
  email: string;
  fax: string;
  website: string;
  leadStatus: string;
  employees: string;
  rating: string;
  skypeId: string;
  secondaryEmail: string;
  twitter: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  description: string;
};


interface CustomerDetailsProps {
  mode?: 'New' | 'Edit'| 'View';
}
const CustomerDetails: React.FC <CustomerDetailsProps>= ({mode}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Form Data Submitted:", data);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Customer created successfully!");
      } else {
        console.error("Failed to create Customer");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">{mode} Customer</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          {/* Customer Information */}
          <Col md={6}>
            <h2 className="h5">Customer Information</h2>
            <Form.Group className="mb-3" controlId="leadOwner">
              <Form.Label>Customer Owner</Form.Label>
              <Form.Select {...register("leadOwner")}>
                <option value="">-None-</option>
                <option value="suraj-gs">SURAJ GS</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                {...register("firstName", { required: "First Name is required" })}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" {...register("title")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" {...register("phone")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" {...register("mobile")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="leadSource">
              <Form.Label>Customer Source</Form.Label>
              <Form.Select {...register("leadSource")}>
                <option value="">-None-</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="industry">
              <Form.Label>Industry</Form.Label>
              <Form.Select {...register("industry")}>
                <option value="">-None-</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="annualRevenue">
              <Form.Label>Annual Revenue</Form.Label>
              <Form.Control type="text" {...register("annualRevenue")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailOptOut">
              <Form.Check
                type="checkbox"
                label="Email Opt Out"
                {...register("emailOptOut")}
              />
            </Form.Group>
          </Col>

          {/* Company Information */}
          <Col md={6}>
            <h2 className="h5">Company Information</h2>
            <Form.Group className="mb-3" controlId="company">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" {...register("company")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                {...register("lastName", { required: "Last Name is required" })}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="fax">
              <Form.Label>Fax</Form.Label>
              <Form.Control type="text" {...register("fax")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="website">
              <Form.Label>Website</Form.Label>
              <Form.Control type="text" {...register("website")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="leadStatus">
              <Form.Label>Customer Status</Form.Label>
              <Form.Select {...register("leadStatus")}>
                <option value="">-None-</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="employees">
              <Form.Label>No. of Employees</Form.Label>
              <Form.Control type="text" {...register("employees")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="rating">
              <Form.Label>Rating</Form.Label>
              <Form.Select {...register("rating")}>
                <option value="">-None-</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="skypeId">
              <Form.Label>Skype ID</Form.Label>
              <Form.Control type="text" {...register("skypeId")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="secondaryEmail">
              <Form.Label>Secondary Email</Form.Label>
              <Form.Control type="email" {...register("secondaryEmail")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="twitter">
              <Form.Label>Twitter</Form.Label>
              <Form.Control type="text" {...register("twitter")} />
            </Form.Group>
          </Col>
        </Row>

        {/* Address Information */}
        <Row>
          <Col>
            <h2 className="h5">Address Information</h2>
            <Form.Group className="mb-3" controlId="street">
              <Form.Label>Street</Form.Label>
              <Form.Control type="text" {...register("street")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" {...register("city")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" {...register("state")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" {...register("zipCode")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control type="text" {...register("country")} />
            </Form.Group>
          </Col>
        </Row>

        {/* Description Information */}
        <Row>
          <Col>
            <h2 className="h5">Description Information</h2>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} {...register("description")} />
            </Form.Group>
          </Col>
        </Row>

        {/* Form Actions */}
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">
            Cancel
          </Button>
          <Button variant="primary" type="submit" className="me-2">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default CustomerDetails;