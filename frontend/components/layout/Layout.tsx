import Navigation from "./Navigation";
import * as LaySt from "./Layout.style";
import React from "react";
import Header from "./Header";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = ({ children }: Props) => {
  return (
    <LaySt.Main>
      <Header />
      {children}
      <Navigation />
    </LaySt.Main>
  );
};

export default Layout;
