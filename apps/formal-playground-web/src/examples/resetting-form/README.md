On this example, we have a reset button added to the form. When clicking the button, the form will be reset to its latest successful state.

---

> ℹ️ If the form is running any asynchronous task like validation or submission, or is on a clean state, then `formal.getResetButtonProps()` will return `disabled = true`.

---

> ✅ You can also reset the form by calling the imperative method `formal.reset()`.

---

> 💡 This is useful if you want to reset the form to it's initial state or the last state after a successful submission.

---

```javascript
import React from "react";
import useFormal from "@rubenamorim/formal";

const initialValues = {
  firstName: "",
  lastName: "",
  email: ""
};

function ResettingFormExample() {
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
      <button {...formal.getResetButtonProps()}>Reset</button>
      <button {...formal.getSubmitButtonProps()}>Submit</button>
    </form>
  );
}
```
