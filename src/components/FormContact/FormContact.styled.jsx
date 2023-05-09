import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const StyledFormik = styled(Formik)`
  display: flex;
`;

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`;

const FormLabel = styled.label`
      margin-right: auto;
      font-size: 18px;
      color: #300339;
`;

const FormInput = styled(Field)`
    font-size: 16px;
    color: #300339;
    border-radius: 15px;
    border: none;
    &:hover, &:focus {
        border: 1px solid #a942d9;
    }
    padding: 15px;
    width: 100%;
    background-color: #e9d8f9;
    &:hover {
        background-color: #ddaaeb;
    }
    transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 0 0 5px rgba(96, 0, 118, 0.2), 0 1px 2px rgba(0, 0, 0, 0.2); 
    } 
  
`

const Error = styled(ErrorMessage)`
    position: absolute;
  color: #cb1717;
  font-size: 14px;
`

const FormContactBtn = styled.button`
    font-size: 20px;
    font-weight: 500;
    color: #300339;
    background-color: #e1bbe3;
    margin: 0 auto;
    width: 100%;
    border-radius: 10px;
    border: none;
    padding: 16px;
    transition: box-shadow 250ms cubic-bezier(0.42, 0, 0.58, 1);
  :hover {
    box-shadow: 0 2px 5px rgba(51, 0, 66, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);
  }

`


export {StyledFormik, StyledForm, FormLabel, FormInput, Error, FormContactBtn}