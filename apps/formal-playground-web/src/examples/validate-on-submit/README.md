By default, if you provided a **yup schema** to `config.schema`, the form will validate its fields when calling `formal.submit()` method.

---

> ℹ️ If the form is invalid, then `formal.isValid` will be set to `false`.

> ℹ️ If a field has an error, then `formal.getFieldProps(field)` will return `error = errorMsg`.

> ℹ️ You can also get a field error message at `formal.errors[field]`.

> ℹ️ If the validation failed and the current form values are the same as when the fail occurred, then `formal.getSubmitButtonProps()` will return `disabled = true`.

---

> ✅ You can also manually validate the form by calling the imperative method `formal.validate()`.

---

> 💡 This is useful if you don't want to validate the form everytime you change a value or everytime you blur an input.

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
});

function ValidateOnSubmitExample() {
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
