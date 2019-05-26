On this example we fake an async submission by returning a promise on the `config.onSubmit` function.

---

> ℹ️ While the submission it's happening, the hook will return `formal.isSubmitting = true`. And `formal.getFieldProps()`, `formal.getResetButtonProps()` and `formal.getSubmitButtonProps()` will return `disabled = true`.

---

> ✅ You can also imperatively await for `formal.submit()` if you want more control over when to submit the form.

---

> 💡 This is useful if you want to persist your changes to a database, for example.

---

```javascript
import React from "react";
import useFormal from "@rubenamorim/formal";

const initialValues = {
  firstName: "",
  lastName: "",
  email: ""
};

function AsyncSubmissionExample() {
  const formal = useFormal(initialValues, {
    onSubmit: values => {
      return new Promise(resolve => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resolve();
        }, 1000);
      });
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
