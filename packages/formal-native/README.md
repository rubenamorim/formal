<a href="https://npmjs.com/package/@rubenamorim/formal-native"><img src="https://img.shields.io/npm/v/@rubenamorim/formal-native.svg?label=npm&style=flat-square" alt="@rubenamorim/formal-native"></a>
<a href="https://npmjs.com/package/@rubenamorim/formal-native"><img src="https://img.shields.io/npm/dm/@rubenamorim/formal-native.svg?label=downloads&style=flat-square" alt="@rubenamorim/formal-native"></a>

# @rubenamorim/formal-native

📱 Native extension for [@rubenamorim/formal](https://npmjs.com/package/@rubenamorim/formal).

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
yarn add @rubenamorim/formal-native
```

## Usage

```typescript
import React from "react";
import { Alert, View, Text, TextInput, Button } from "react-native";
import useFormal from "@rubenamorim/formal-native";
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
    onSubmit: values => Alert.alert(JSON.stringify(values))
  });

  return (
    <View>
      <View>
        <Text>First Name</Text>
        <TextInput {...formal.getFieldProps("firstName")} />
        {formal.errors.firstName && <Text>{formal.errors.firstName}</Text>}
      </View>

      <View>
        <Text>Last Name</Text>
        <TextInput {...formal.getFieldProps("lastName")} />
        {formal.errors.lastName && <Text>{formal.errors.lastName}</Text>}
      </View>

      <View>
        <Text>Email</Text>
        <TextInput {...formal.getFieldProps("email")} autoCapitalize="none" />
        {formal.errors.email && <Text>{formal.errors.email}</Text>}
      </View>

      <Button {...formal.getSubmitButtonProps()} title="Submit" />
    </View>
  );
}
```

## Tips

As you can see, the above code became a little verbose due to the repetition of the fields code, in order to abstract that repeated code, you can create a `Field` component and replace all those calls in App.js.

**Field.js**

```typescript
import React from "react";
import { View, Text, TextInput } from "react-native";

export default function Field({ label, error, ...props }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...props} />
      {error && <Text>{error}</Text>}
    </View>
  );
}
```

**App.js**

```diff
import React from "react";
-import { Alert, View, Text, TextInput, Button } from "react-native";
+import { Alert, View } from 'react-native'
import useFormal from "@rubenamorim/formal-native";
import * as yup from "yup";

+import Field from './components/field'
+import Button from './components/button'

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
    onSubmit: values => Alert.alert(JSON.stringify(values))
  });

  return (
    <View>
-      <View>
-        <Text>First Name</Text>
-        <TextInput {...formal.getFieldProps("firstName")} />
-        {formal.errors.firstName && (<Text>{formal.errors.firstName}</Text>)}
-      </View>
+      <Field {...formal.getFieldProps('firstName')} label="First name" />

-      <View>
-        <Text>Last Name</Text>
-        <TextInput {...formal.getFieldProps("lastName")} />
-        {formal.errors.lastName && (<Text>{formal.errors.lastName}</Text>)}
-      </View>
+      <Field {...formal.getFieldProps('lastName')} label="Last name" />

-      <View>
-        <Text>Email</Text>
-        <TextInput {...formal.getFieldProps("email")} autoCapitalize="none" />
-        {formal.errors.email && (<Text>{formal.errors.email}</Text>)}
-      </View>
+      <Field {...formal.getFieldProps('email')} label="Email" autoCapitalize="none" />

      <Button {...formal.getSubmitButtonProps()} title="Submit" />
    </View>
  );
}
```

## Extended documentation

For extended documentation, examples and contributing guidelines, please refer to [the monorepo containing this package](https://github.com/kevinwolfcr/formal).
