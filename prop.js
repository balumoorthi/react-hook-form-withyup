import PropTypes from "prop-types";

const fieldDefaultPropTypes = {
  fieldProps: {},
  containerProps: {},
  control: {},
  errors: {},
  labelProps: {},
  errorProps: {},
};

const fieldPropTypes = {
  fieldProps: PropTypes.shape({}),
  containerProps: PropTypes.shape({}),
  labelProps: PropTypes.shape({}),
  errorProps: PropTypes.shape({}),
  control: PropTypes.shape({}),
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
};

export { fieldPropTypes, fieldDefaultPropTypes };
