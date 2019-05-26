This is the most basic example, by calling `useFormal()` you receive some prop getters you can attach to your existing text inputs and form elements and automatically spread `value`, `onChange` and `onSubmit` props.

This is the most basic example and it doesn't include any validation. For examples on using validation, please see the examples under the validation menu.

---

> ℹ️ If the form is in a clean state (current values are equal to last successful values), then `formal.getSubmitButtonProps()` will return `disabled = false`.

---

> ✅ You can also get a field value at `formal.values[field]`.

> ✅ You can also change the value of a field by calling the imperative method `formal.change(field, value)`.

> ✅ You can also submit the form by calling the imperative method `formal.submit()`.

---

> 💡 This is useful if you don't want to make an asynchronous submit. For example, adding an item to a todo list.

---

```javascript
import React from "react";
import useFormal from "@rubenamorim/formal";

const initialValues = {
  firstName: "",
  lastName: "",
  email: ""
};

function BasicExample() {
  const formal = useFormal(initialValues, {
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form {...formal.getFormProps()}>
      <input {...formal.getFieldProps("firstName")} type="text" />
      <input {...formal.getFieldProps("lastName")} type="text" />
      <input {...formal.getFieldProps("email")} type="text" />
      <button {...formal.getSubmitButtonProps()}>Submit</button>
    </form>
  );
}
```
