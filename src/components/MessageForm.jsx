import { Field, Form, Formik } from "formik";
import "./css/MessageForm.css";

const MessageForm = () => {
  const sleep = (ms) => new Promise((res) => setTimeout(res, ms));
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
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          description: "",
          services: [],
          toc: false,
        }}
        onSubmit={async (values) => {
          await sleep(500);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">First name</label>
            <Field name="firstName" placeholder="First name" />

            <label htmlFor="lastName">Last name</label>
            <Field name="lastName" placeholder="Last name" />

            <label htmlFor="email">Email</label>
            <Field name="email" placeholder="you@company.com" />

            <label htmlFor="phone">Phone number</label>
            <Field name="phone" placeholder="+1 (555) 000-0000" />

            <label htmlFor="description">How can we help?</label>
            <Field
              as="textarea"
              name="description"
              placeholder="Tell us a little about the project...."
            />
            <label htmlFor="services">Services</label>
            <div role="group" className="services">
              <label>
                <Field type="checkbox" name="checked" value="Website design" />
                Website design
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="Content Creation"
                />
                Content Creation
              </label>
              <label>
                <Field type="checkbox" name="checked" value="UX Design" />
                UX Design
              </label>
              <label>
                <Field
                  type="checkbox"
                  name="checked"
                  value="Strategy & consulting"
                />
                Strategy & consulting
              </label>
              <label>
                <Field type="checkbox" name="checked" value="User research" />
                User research
              </label>
              <label>
                <Field type="checkbox" name="checked" value="other" />
                Other
              </label>
            </div>
            <button type="submit">Send message</button>
            <label className="toc">
              <Field type="checkbox" name="toc" />
              You agree to our friendly <u>privacy policy</u>
            </label>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MessageForm;
