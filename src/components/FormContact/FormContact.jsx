import React from "react";
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { StyledFormik, StyledForm, FormLabel, FormInput, Error, FormContactBtn } from "./FormContact.styled";

const initialValues = {
    name: "",
    number: "",
}

const schema = Yup.object({
    name: Yup.string().required('The field Name is required'),
    number: Yup.string().required('The field Number is required')
    .min(7, 'The number must be at least 7 digits long')
    .max(14, 'The number can consist of maximum 14 digits')
})

export const FormContact = ({addContact}) => {
    return(
        <StyledFormik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, {resetForm}) =>{
            addContact(values.name, values.number);
        resetForm();
    }}>
        {({ errors, touched }) => (
        <StyledForm>
          <div>
            <FormLabel htmlFor="name">Name:</FormLabel>
            <FormInput type="text" id="name" name="name" />
            <Error name="name" component="div" />
          </div>
          <div>
            <FormLabel htmlFor="number">Number:</FormLabel>
            <FormInput type="tel" id="number" name="number" />
            <Error name="number" component="div" />
          </div>
          <FormContactBtn type="submit">Add contact</FormContactBtn>
        </StyledForm>
      )}
        </StyledFormik>
    )
}


FormContact.propTypes = {
    addContact: PropTypes.func.isRequired,
  };