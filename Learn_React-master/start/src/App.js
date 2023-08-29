import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import MyCom from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/hello";
import Message from "./components/Message";
import Count from "./components/Count";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import "./AppStyle.css";
import styles from "./AppStyle.module.css";
import Form from "./components/form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import Column from "./components/Column";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRinputfocus from "./components/FRinputfocus";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundry from "./components/ErrorBoundry";
import ClickCount from "./components/ClickCount";
import HoverCounter from "./components/HoverCounter";
import Counter from "./components/Counter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import ClickHoveredTwo from "./components/ClickHoveredTwo";
import { UserProvider } from "./components/userContext";
import ComponentC from "./components/ComponentC";
import MemoComp from "./components/MemoComp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FRinputfocus />
      </div>
    );
  }
}
export default App;
