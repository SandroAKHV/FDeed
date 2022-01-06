import React from "react";

function Button({ children, type, disabled, version }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  version :'primary'
}

export default Button;
