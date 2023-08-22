import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogoutButton(): any {
  const { logout, isAuthenticated } = useAuth0();

  return isAuthenticated && <button onClick={() => logout()}>Sign out</button>;
}
