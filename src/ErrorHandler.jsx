import PropTypes from "prop-types";

const ErrorHandler = ({ errorMessage }) => {
  alert(`Error !! Error message is : ${errorMessage}`);

  return null;
};

ErrorHandler.propTypes = {
  errorMessage: PropTypes.string,
};

export default ErrorHandler;
