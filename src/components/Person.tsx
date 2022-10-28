import React, {FC, ChangeEvent, useState} from 'react';

export enum HairColor {
  Blonde = "Your hair is blonde!",
  Brown = "Cool hair color!",
  Pink = "Pink is so cool!",
}

export type NameType = 'Pedro' | 'Jack';
export interface Props {
  name: NameType;
  age?: number;  // ? means optional
  email: string;
  getName?: (name: string) => string; // returns a string
  hairColor: HairColor;
}

export const Person = (props: Props) => {
  return (
    <span>
      &nbsp;{props.name}
      &nbsp;{props.email}
      &nbsp;{props.hairColor}
    </span>
  );
};

// OR destructure the props like this:

export const PersonDestructured = ({name, email, age, hairColor}: Props) => {

// then use the variable name alone:
  return (
    <span>
      &nbsp;{name}
      &nbsp;{email}
      &nbsp;{hairColor}
    </span>
  )
};

// OR import functionalComponent (FC) from react:

// import {FC} from 'react';

// then destructure the interface like this:

export const PersonFC: FC<Props> = ({name, email, age, hairColor}) => {

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
      &nbsp;{hairColor}
    </span>
  );
};


