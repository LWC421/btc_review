import Navigation from "./Navigation";
import * as Lay from "./Layout.style";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Layout = ({ children }: Props) => {
  return (
    <Lay.Main>
      {children}
      <Navigation />
    </Lay.Main>
  );
};

export default Layout;
