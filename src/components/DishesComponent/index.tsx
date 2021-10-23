import React from "react";
import "antd/dist/antd.css";
import {
  DishesForm,
  Main,
  InputBox,
  StyledInput,
  StyledTimePicker,
  StyledButton,
  StyledSelect,
  StyledLabel,
  ErrorMessage,
  Logo,
} from "./style";
import logo from "../../images/logo.png";
import axios from "axios";
import { Field, Form } from "react-final-form";
import { buildRequestBody } from "./dish.client";
import { DataToTransform } from "./dish.interface";
import { validation } from "./validation";
import { Select } from "antd";
import { renderSwitch } from "./renderSwitch";

const DishesComponent = () => {
  const { Option } = Select;

  const onSubmitFunction = (values: DataToTransform) => {
    axios
      .post(
        "https://frosty-wood-6558.getsandbox.com:443/dishes",
        buildRequestBody(values)
      )
      .then((response) => alert(JSON.stringify(response.data, null, 2)))
      .catch((err) => alert(err));
  };

  return (
    <Main>
      <Logo src={logo} alt="logo" />
      <Form
        onSubmit={(values: DataToTransform) => onSubmitFunction(values)}
        validate={(values: DataToTransform) => validation(values)}
      >
        {({ handleSubmit, values, valid }) => (
          <DishesForm onSubmit={handleSubmit}>
            <InputBox>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <Field name="name">
                {({ input, meta }) => (
                  <>
                    <StyledInput {...input} placeholder="Name" type="text" />
                    {meta.touched && meta.error && (
                      <ErrorMessage>{meta.error}</ErrorMessage>
                    )}
                  </>
                )}
              </Field>
            </InputBox>
            <InputBox>
              <StyledLabel htmlFor="preparation_time">
                Preparation time
              </StyledLabel>
              <Field name="preparation_time">
                {({ input, meta }) => (
                  <>
                    <StyledTimePicker
                      showNow={false}
                      format="HH:mm:ss"
                      {...input}
                      placeholder="00:00:00"
                    />
                    {meta.touched && meta.error && (
                      <ErrorMessage>{meta.error}</ErrorMessage>
                    )}
                  </>
                )}
              </Field>
            </InputBox>
            <InputBox>
              <StyledLabel htmlFor="type">Type</StyledLabel>
              <Field name="type">
                {({ input, meta }) => (
                  <>
                    <StyledSelect {...input}>
                      <Option value="" disabled hidden>
                        Select
                      </Option>
                      <Option value="pizza">pizza</Option>
                      <Option value="soup">soup</Option>
                      <Option value="sandwich">sandwich</Option>
                    </StyledSelect>
                    {meta.touched && meta.error && (
                      <ErrorMessage>{meta.error}</ErrorMessage>
                    )}
                  </>
                )}
              </Field>
            </InputBox>
            {renderSwitch(values.type)}

            <StyledButton
              size="large"
              htmlType="submit"
              danger={!valid}
              type="default"
            >
              submit
            </StyledButton>
          </DishesForm>
        )}
      </Form>
    </Main>
  );
};

export default DishesComponent;
