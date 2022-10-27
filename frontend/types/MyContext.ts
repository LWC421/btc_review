import { AppContext } from "next/app";

interface MyContext extends AppContext {
  req: any;
  ctx: any;
}

export default MyContext;
