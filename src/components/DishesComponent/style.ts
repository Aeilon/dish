import styled from "styled-components";
import { TimePicker, Input, Button, Select, InputNumber } from "antd";

export const Main = styled.div`
  width: 50%;
  margin: auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DishesForm = styled.form`
  background: rgba(69, 88, 88, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
  padding: 0 20px 20px 20px;
  border: 1px solid black;
`;

export const StyledLabel = styled.label`
  color: white;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 30px;
  position: relative;
`;

export const StyledInput = styled(Input)`
  width: 70%;
  height: 100%;
  padding-left: 15px;
`;

export const StyledTimePicker = styled(TimePicker)`
  width: 70%;
  height: 100%;
  padding-left: 15px;
`;

export const StyledInputNumber = styled(InputNumber)`
  width: 70%;
  height: 100%;
  padding-left: 5px;
`;

export const StyledButton = styled(Button)`
  width: 70%;
  padding-left: 15px;
  margin-top: 30px;
`;

export const StyledSelect = styled(Select)`
  width: 70%;
  height: 100%;
`;

export const ErrorMessage = styled.p`
  color: red;
  position: absolute;
  top: 35px;
  left: 145px;
`;

export const Logo = styled.img`
  width: 320px;
  height: 320px;
`;
