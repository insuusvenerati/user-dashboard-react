import React, { useState, Fragment } from "react";
import { Navbar } from "./components/ModuleExports";

const App = ({ isDark, setDark }) => {
  [isDark, setDark] = useState(false);

  return (
    <Fragment>
      <Navbar isDark={isDark} setDark={setDark} />
    </Fragment>
  );
};

export default App;
