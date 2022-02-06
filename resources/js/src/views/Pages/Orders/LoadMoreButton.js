import React from "react";
import { Button, Spinner } from "reactstrap";
import classnames from "classnames";

export default ({ children, loading, ...rest }) => (
  <Button {...rest} color="info" className="load-more-button">
    {loading && (
      <Spinner
        className={classnames({
          "position-relative": true,
          visible: loading,
          invisible: !loading
        })}
        size="sm"
      // type="grow"
      />
    )}
    {!loading && (
      <span
        className={classnames({
          invisible: loading,
          visible: !loading,
        })}
      >
        {children}
      </span>
    )}
  </Button>
);

