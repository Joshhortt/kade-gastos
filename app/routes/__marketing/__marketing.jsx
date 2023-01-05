import marketingStyles from "~/styles/marketing.css";
import { Outlet } from "@remix-run/react";

export default function MarketingLayout() {
  return <Outlet />;
}

export function links() {
  return [{ rel: "stylesheet", href: marketingStyles }];
}
