import React from "react";
import PropTypes from "prop-types";
import {
  StyledFormik,
  StyledForm,
  FilterLabel,
  FilterInput,
} from "./Filter.styled";

export const FormFilter = ({ label, onChange }) => {
  const initialValues = {
    filter: "",
  };

  return (
    <StyledFormik initialValues={initialValues}>
      <StyledForm>
        <FilterLabel htmlFor="filter">{label}</FilterLabel>
        <FilterInput
          type="text"
          id="filter"
          name="filter"
          onChange={onChange}
          value={onChange.filter}
        />
      </StyledForm>
    </StyledFormik>
  );
};

FormFilter.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
