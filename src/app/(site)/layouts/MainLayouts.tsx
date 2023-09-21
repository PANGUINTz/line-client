import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayouts = ({ children, handleChangeState, changeState }: any) => {
  console.log(handleChangeState, "MainLayouts");

  return (
    <div>
      <Header handleChange={handleChangeState} changeState={changeState} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
