import React, { useState, Fragment } from "react";
import { Navbar, CardList } from "./components/ModuleExports";

const App = ({ isDark, setDark }) => {
  [isDark, setDark] = useState(false);

  return (
    <Fragment>
      <Navbar isDark={isDark} setDark={setDark} />
      <CardList />
    </Fragment>
  );
};

export default App;
