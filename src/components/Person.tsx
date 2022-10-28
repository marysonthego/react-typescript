import React, {FC, ChangeEvent, useState} from 'react';

export interface Props {
  name: string;
  age?: number;  // ? means optional
  email: string;
  getName?: (name: string) => string; // returns a string
}

export const Person = (props: Props) => {
  return (
    <span>
      &nbsp;{props.name}
      &nbsp;{props.email}
    </span>
  );
};

// OR destructure the props like this:

export const PersonDestructured = ({name, email, age}: Props) => {

// then use the variable name alone:
  return (
    <span>
      &nbsp;{name}
      &nbsp;{email}
    </span>
  )
};

// OR import functionalComponent (FC) from react:

// import {FC} from 'react';

// then destructure the interface like this:

export const PersonFC: FC<Props> = ({name, email, age}) => {

  const [country, setCountry] = useState<string | null>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <span>
      &nbsp;{name}
      &nbsp;{email}&nbsp;
      <input placeholder="Enter your country..." onChange={handleChange} />
      &nbsp;{country}
    </span>
  );
};


