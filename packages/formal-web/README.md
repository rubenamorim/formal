<a href="https://npmjs.com/package/@rubenamorim/formal-web"><img src="https://img.shields.io/npm/v/@rubenamorim/formal-web.svg?label=npm&style=flat-square" alt="@rubenamorim/formal-web"></a>
<a href="https://npmjs.com/package/@rubenamorim/formal-web"><img src="https://img.shields.io/npm/dm/@rubenamorim/formal-web.svg?label=downloads&style=flat-square" alt="@rubenamorim/formal-web"></a>

# @rubenamorim/formal-web

💻 Web extension for [@rubenamorim/formal](https://npmjs.com/package/@rubenamorim/formal).

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Usage](#usage)
- [Tips](#tips)
- [Extended documentation](#extended-documentation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```shell
yarn add @rubenamorim/formal-web
```

## Usage

```typescript
import React from "react";
import useFormal from "@rubenamorim/formal-web";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
});

const initialValues = {
  firstName: "Tony",
  lastName: "Stark",
  email: "ironman@avengers.io"
};

export default function App() {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => console.log("Your values are:", values)
  });

  return (
    <form {...formal.getFormProps()}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...formal.getFieldProps("firstName")} type="text" />
        {form.errors.firstName && <div>{form.errors.firstName}</div>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input {...formal.getFieldProps("lastName")} type="text" />
        {form.errors.lastName && <div>{form.errors.lastName}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input {...formal.getFieldProps("email")} type="text" />
        {form.errors.email && <div>{form.errors.email}</div>}
      </div>

      <button {...formal.getSubmitButtonProps()} type="submit">
        Submit
      </button>
    </form>
  );
}
```

## Tips

As you can see, the above code became a little verbose due to the repetition of the fields code, in order to abstract that repeated code, you can create a `Field` component and replace all those calls in App.js.

**Field.js**

```typescript
import React from "react";

export default function Field({ id, label, error, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} type="text" {...props} />
      {error && <div>{error}</div>}
    </div>
  );
}
```

**App.js**

```diff
import React from "react";
import useFormal from "@rubenamorim/formal-web";
import * as yup from "yup";

+import Field from './field'

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required()
});

const initialValues = {
  firstName: "Tony",
  lastName: "Stark",
  email: "ironman@avengers.io"
};

export default function App() {
  const formal = useFormal(initialValues, {
    schema,
    onSubmit: values => console.log("Your values are:", values)
  });

  return (
    <form {...formal.getFormProps()}>
-      <div>
-        <label htmlFor="firstName">First Name</label>
-        <input {...formal.getFieldProps("firstName")} type="text" />
-        {form.errors.firstName && <div>{form.errors.firstName}</div>}
-      </div>
+      <Field label="First Name" {...formal.getFieldProps("firstName")} />

-      <div>
-        <label htmlFor="lastName">Last Name</label>
-        <input {...formal.getFieldProps("lastName")} type="text" />
-        {form.errors.lastName && <div>{form.errors.lastName}</div>}
-      </div>
+      <Field label="Last Name" {...formal.getFieldProps("lastName")} />

-      <div>
-        <label htmlFor="email">Email</label>
-        <input {...formal.getFieldProps("email")} type="text" />
-        {form.errors.email && <div>{form.errors.email}</div>}
-      </div>
+      <Field label="Email" {...formal.getFieldProps("email")} />

      <button {...formal.getSubmitButtonProps()} type="submit">
        Submit
      </button>
    </form>
  );
}
```

## Extended documentation

For extended documentation, examples and contributing guidelines, please refer to [the monorepo containing this package](https://github.com/kevinwolfcr/formal).
