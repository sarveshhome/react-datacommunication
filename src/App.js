import React from "react";
import "./style.css";
import {ParentA} from "./Parent/Parent";
import { ExportItem } from "./components/ExpenseItem";
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Data communication between components</p>
      <ParentA />
    </div>
  );
}
export default App;