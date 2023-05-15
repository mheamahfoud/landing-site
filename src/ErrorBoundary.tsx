import React from "react";
// import { Alert } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error:any) {
    return { error };
  }

  /* eslint-disable react/no-danger */
  render() {
    const { error } :any= this.state;
    if (error) {
      return (
        <div className="alert alert-primary" role="alert">
          <code
            dangerouslySetInnerHTML={{
              __html: error.stack
                .replaceAll("\n", "<br>")
                .replaceAll(" ", "&nbsp;"),
            }}
          />
        </div>
        // <Alert severity="error">
        //   <code
        //     dangerouslySetInnerHTML={{
        //       __html: error.stack.replaceAll('\n', '<br>').replaceAll(' ', '&nbsp;'),
        //     }}
        //   />
        // </Alert>
      );
    }
    const { children } :any = this.props;
    return children;
  }
}

export default ErrorBoundary;
