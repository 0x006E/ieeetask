import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./css/MessageFormComponent.css";

const MessageFormComponent = () => {
  const [error, setError] = useState(null);
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
  const API_URL = "https://iksinterns.herokuapp.com/api/";
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  return (
    <div className="form">
      <div className="title">
        <h1>Let's level up your brand, together</h1>
        <h3>
          You can reach us anytime via <b>hi@untitledui.com</b>
        </h3>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          description: "",
          services: [],
          toc: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Field required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Field required"),
          phone: Yup.string()
            .required("Field required")
            .matches(phoneRegExp, "Phone number is not valid")
            .min(10, "This does not look like a phone number")
            .max(10, "This does not look like a phone number"),
          description: Yup.string().required("Field required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            let response = await fetch(`${API_URL}post`, {
              method: "POST",
              body: new URLSearchParams({
                name: values.name,
                email: values.email,
                phone: values.phone,
                description: values.description,
                services: JSON.stringify(values.services),
              }),
            });
            let error = response.status === 201 ? false : true;
            setError(error);
            await sleep(5000);
            if (!error) resetForm();
          } catch (e) {
            setError(true);
          }
          await sleep(5000);
          setError(null);
          setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <div className="input">
              <label htmlFor="name">Name</label>
              <Field name="name" placeholder="Name" />
              <div className="error">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="you@company.com" />
              <div className="error">
                <ErrorMessage name="email" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="phone">Phone number</label>
              <Field name="phone" placeholder="+1 (555) 000-0000" />
              <div className="error">
                <ErrorMessage name="phone" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="description">How can we help?</label>
              <Field
                as="textarea"
                name="description"
                placeholder="Tell us a little about the project...."
              />
              <div className="error">
                <ErrorMessage name="description" />
              </div>
            </div>
            <div className="input">
              <label htmlFor="services">Services</label>
              <div role="group" className="services">
                {[
                  "Website design",
                  "Content Creation",
                  "UX Design",
                  "Strategy & consulting",
                  "User research",
                  "Other",
                ].map((service) => (
                  <label key={service}>
                    <Field type="checkbox" name="services" value={service} />
                    {service}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={
                !props.values.toc || props.isSubmitting || !props.isValid
              }
              className={`${
                error === true ? "red-error" : error === false ? "success" : ""
              }`}
            >
              {`${
                error === true
                  ? "Something went wrong!"
                  : error === false
                  ? "Message sent"
                  : "Send message"
              }`}
            </button>
            <label id="toc">
              <Field type="checkbox" name="toc" />
              You agree to our friendly <u>privacy policy</u>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MessageFormComponent;
