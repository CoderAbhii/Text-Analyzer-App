import React from "react";

export default function Alert(props) {
    return (
      <div style={{height: "60px"}}>
    {props.alert && <div className={`container-fluid alert alert-dismissible fade show text-center fs-5 my-1`} role="alert" style={{"backgroundColor": "#fff"}}>
        <strong>{props.alert.msg}</strong>
      </div>}
      </div>
  );
}


