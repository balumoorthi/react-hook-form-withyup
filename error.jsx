import React from "react";

import PropTypes from "prop-types";

const Error = ({ errorProps, errors, name }) => {
  if (errors[name]) {
    return <p className={errorProps.className}>{errors[name]?.message}</p>;
  }
  return null;
};

Error.defaultProps = {
  errors: {},
  errorProps: {},
  name: "",
};

Error.propTypes = {
  errors: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({})]),
  errorProps: PropTypes.shape({
    className: PropTypes.string,
  }),
  name: PropTypes.string,
};

export default Error;
