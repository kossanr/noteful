import React from "react";

export default class NotefulError extends React.Component {
  // use hasError to conditionally render an error UI.
  //If true, an error has occurred => display the error UI
  //otherwise, display the normal children.
  state = {
    hasError: false,
  };

  //method sets hassError to true
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    //   conditionally render an error message if hasError is true. Otherwise display the children as normal.
    if (this.state.hasError) {
      return <h2>Could not display this page</h2>;
    }
    return this.props.children;
  }
}
