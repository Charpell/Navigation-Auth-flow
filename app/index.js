console.ignoredYellowBox = ['Remote debugger'];

import React from "react";
import { SignedOut } from "./router";

export default class App extends React.Component {
  render() {
    return <SignedOut />;
  }
}