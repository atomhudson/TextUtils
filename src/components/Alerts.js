import React from "react";

function Alerts(props) {
     
  return (
    props.text && <div className={`alert alert-${props.text.type} alert-dismissible fade show`} role="alert">
      <strong>{props.text.msg}</strong>
    </div>
  );
}

export default Alerts;
