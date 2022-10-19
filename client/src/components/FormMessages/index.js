import React from "react";
import { Formik, Field, Form } from "formik";
import * as ChatActionsCreator from "../../actions/chatActionsCreator";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const FormMessages = () => {
  const { createMessageRequest } = bindActionCreators(
    ChatActionsCreator,
    useDispatch()
  );
  const onSubmit = (values, formikBag) => {
    console.log(values);
    createMessageRequest(values);
    // formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={{
        content: "",
        user: "",
      }}
      onSubmit={onSubmit}
    >
      <Form>
        <Field name="content" placeholder="content" />
        <Field name="user" placeholder="user" />
        <input type="submit" value="send new message" />
      </Form>
    </Formik>
  );
};

export default FormMessages;
