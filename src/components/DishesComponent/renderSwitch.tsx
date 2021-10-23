import { DishType } from "./dish.interface";
import { Field } from "react-final-form";
import React from "react";
import {
  StyledInputNumber,
  InputBox,
  ErrorMessage,
  StyledLabel,
} from "./style";

export const renderSwitch = (value: DishType) => {
  switch (value) {
    case DishType.PIZZA:
      return (
        <>
          <InputBox>
            <StyledLabel htmlFor="no_of_slices">Number of slices</StyledLabel>
            <Field name="no_of_slices">
              {({ input, meta }) => (
                <>
                  <StyledInputNumber
                    type="number"
                    min="1"
                    placeholder="Number of slices"
                    {...input}
                  />
                  {meta.touched && meta.error && (
                    <ErrorMessage>{meta.error}</ErrorMessage>
                  )}
                </>
              )}
            </Field>
          </InputBox>
          <InputBox>
            <StyledLabel htmlFor="diameter">Diameter</StyledLabel>
            <Field name="diameter">
              {({ input, meta }) => (
                <>
                  <StyledInputNumber
                    type="number"
                    step="0.1"
                    min="1"
                    placeholder="Diameter"
                    {...input}
                  />
                  {meta.touched && meta.error && (
                    <ErrorMessage>{meta.error}</ErrorMessage>
                  )}
                </>
              )}
            </Field>
          </InputBox>
        </>
      );

    case DishType.SOUP:
      return (
        <>
          <InputBox>
            <StyledLabel htmlFor="spiciness_scale">Spiciness scale</StyledLabel>
            <Field name="spiciness_scale">
              {({ input, meta }) => (
                <>
                  <StyledInputNumber
                    type="number"
                    placeholder="1-10"
                    min="1"
                    max="10"
                    {...input}
                  />
                  {meta.touched && meta.error && (
                    <ErrorMessage>{meta.error}</ErrorMessage>
                  )}
                </>
              )}
            </Field>
          </InputBox>
        </>
      );

    case DishType.SANDWICH:
      return (
        <>
          <InputBox>
            <StyledLabel htmlFor="slices_of_bread">Slices of bread</StyledLabel>
            <Field name="slices_of_bread">
              {({ input, meta }) => (
                <>
                  <StyledInputNumber
                    type="number"
                    placeholder="Slices of bread"
                    min="1"
                    {...input}
                  />
                  {meta.touched && meta.error && (
                    <ErrorMessage>{meta.error}</ErrorMessage>
                  )}
                </>
              )}
            </Field>
          </InputBox>
        </>
      );
  }
};
