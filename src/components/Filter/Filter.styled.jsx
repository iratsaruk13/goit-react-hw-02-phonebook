import styled from "styled-components";
import { Formik, Form, Field } from 'formik';

const StyledFormik = styled(Formik)`
  display: flex;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FilterLabel = styled.label`
  display: block;
  margin-right: auto;
  font-size: 18px;
      color: #300339;
`;

const FilterInput = styled(Field)`
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

  &:focus {
    outline: none;
    border-color: #00aeef;
  }
`;

export { StyledFormik, StyledForm, FilterLabel, FilterInput };