import React, { useContext } from "react";
import { Form as FinalForm, Field } from "react-final-form";
import { Form, Button, Header } from "semantic-ui-react";
import TextInput from "../../app/common/form/TextInput";
import { RootContextStore } from "./../../app/stores/rootStore";
import { IUserFormValues } from "../../app/models/user";
import { isRequired, combineValidators } from "revalidate";
import { FORM_ERROR } from "final-form";
import ErrorMessage from "../../app/common/form/ErrorMessage";

const validate = combineValidators({
  email: isRequired("email"),
  password: isRequired("password"),
});

const LoginForm = () => {
  const rootStore = useContext(RootContextStore);
  const { login } = rootStore.userStore;
  return (
    <FinalForm
      validate={validate}
      onSubmit={(values: IUserFormValues) =>
        login(values).catch((error) => ({
          [FORM_ERROR]: error,
        }))
      }
      render={({
        handleSubmit,
        submitting,
        form,
        submitError,
        pristine,
        invalid,
        dirtySinceLastSubmit,
      }) => (
        <Form onSubmit={handleSubmit} error>
          <Header as="h2" content="Login to Reactivities" color='teal'/>
          <Field name="email" component={TextInput} placeholder="Email" />
          <Field
            name="password"
            component={TextInput}
            placeholder="Password"
            type="password"
          />
          {submitError && !dirtySinceLastSubmit && (
            <ErrorMessage error={submitError} text = "Invalid username or password" />
          )}
          <br />
          <Button
            disabled={(invalid && !dirtySinceLastSubmit) || pristine}
            loading={submitting}
            color='teal'
            content="Login"
            fluid

          />
        </Form>
      )}
    />
  );
};
export default LoginForm;
