If your `config.schema` contains asynchronous validations, then the form will wait until those validations are finished before submitting.

---

> ℹ️ If the asynchronous validation is happening, then `formal.isValidating` will be `true`.

> ℹ️ If the form is validating, then `formal.getResetButtonProps()` and `formal.getSubmitButtonProps()` will return `disabled = true`.

---

> 💡 This is useful if you want to check if a username is available from and endpoint before submitting.

---

```javascript
import React from "react";
import * as yup from "yup";
import useFormal from "@rubenamorim/formal";

const initialValues = {
  firstName: "",
  lastName: "",
  email: ""
};

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
    .test("email-taken", "${value} is taken", async value => {
      return await checkUsernameAsync(value);
    })
});

function ValidateOnSubmitAsyncExample() {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form {...formal.getFormProps()}>
      <input {...formal.getFieldProps("firstName")} type="text" />
      <input {...formal.getFieldProps("lastName")} type="text" />
      <input {...formal.getFieldProps("email")} type="text" />
      <button {...formal.getResetButtonProps()}>Reset</button>
      <button {...formal.getSubmitButtonProps()}>Submit</button>
    </form>
  );
}
```
