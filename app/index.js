console.ignoredYellowBox = ['Remote debugger'];

import React from "react";
import { SignedOut, SignedIn } from "./router";

export default class App extends React.Component {
  render() {
    return <SignedIn />;
  }
}