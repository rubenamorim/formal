<a href="https://npmjs.com/package/@rubenamorim/formal"><img src="https://img.shields.io/npm/v/@rubenamorim/formal.svg?label=npm&style=flat-square" alt="@rubenamorim/formal"></a>
<a href="https://npmjs.com/package/@rubenamorim/formal"><img src="https://img.shields.io/npm/dm/@rubenamorim/formal.svg?label=downloads&style=flat-square" alt="@rubenamorim/formal"></a>

# @rubenamorim/formal

👔 Elegant form management primitives for the react hooks era.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Install](#install)
- [Usage with React](#usage-with-react)
- [Usage with React Native](#usage-with-react-native)
- [Reducing boilerplate](#reducing-boilerplate)
- [Extended documentation](#extended-documentation)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```shell
yarn add @rubenamorim/formal
```

## Usage with React

> Note: this boilerplate can be [reduced](#reducing-boilerplate).

```typescript
import React from "react";
import * as yup from "yup";
import useFormal from "@rubenamorim/formal";

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

  const handleSubmit = e => {
    e.preventDefault();
    formal.submit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formal.values.firstName}
          onChange={e => formal.change("firstName", e.target.value)}
        />
        {formal.errors.firstName && <div>{formal.errors.firstName}</div>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formal.values.lastName}
          onChange={e => formal.change("lastName", e.target.value)}
        />
        {formal.errors.lastName && <div>{formal.errors.lastName}</div>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formal.values.email}
          onChange={e => formal.change("email", e.target.value)}
        />
        {formal.errors.email && <div>{formal.errors.email}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
```

## Usage with React Native

```typescript
import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import * as yup from "yup";
import useFormal from "@rubenamorim/formal";

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
    <View>
      <View>
        <Text>First Name</Text>
        <TextInput
          value={formal.values.firstName}
          onChangeText={text => formal.change("firstName", text)}
        />
        {formal.errors.firstName && <Text>{formal.errors.firstName}</Text>}
      </View>

      <View>
        <Text>Last Name</Text>
        <TextInput
          value={formal.values.lastName}
          onChangeText={text => formal.change("lastName", text)}
        />
        {formal.errors.lastName && <Text>{formal.errors.lastName}</Text>}
      </View>

      <View>
        <Text>Email</Text>
        <TextInput
          value={formal.values.email}
          onChangeText={text => formal.change("email", text)}
        />
        {formal.errors.email && <Text>{formal.errors.email}</Text>}
      </View>

      <Button onPress={formal.submit} title="Submit" />
    </View>
  );
}
```

## Reducing boilerplate

In order to reduce boilerplate, you can install one of two packages depending on whether you are on web or mobile. That way, you will receive some prop getters that you just have to spread to your inputs and buttons. ✨

- [@rubenamorim/formal-web](http://npmjs.com/package/@rubenamorim/formal-web)
- [@rubenamorim/formal-native](http://npmjs.com/package/@rubenamorim/formal-native)

## Extended documentation

For extended documentation, examples and contributing guidelines, please refer to [the monorepo containing this package](https://github.com/kevinwolfcr/formal).
