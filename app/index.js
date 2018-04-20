console.ignoredYellowBox = ['Remote debugger'];

import React from "react";
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);

import { SignedOut, SignedIn } from "./router";

export default class App extends React.Component {
  render() {
    return <SignedIn />;
  }
}