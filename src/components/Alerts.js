import React from "react";

function Alerts(props) {
  return (
    <div style={{ height: '50px' }}>
      {props.text && (
        <div
          className={`alert alert-${props.text.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.text.msg}</strong>
        </div>
      )}
    </div>
  );
}

export default Alerts;
