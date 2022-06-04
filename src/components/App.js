import Menu from "./Menu";
import React from "react";

const App = ({ children }) => (
  <>
    <Menu />
    {children}
  </>
);
export default App;

// function App() {
//   return (
//     <>
//       <Menu />
//     </>
//   );
// }

// export default App;
