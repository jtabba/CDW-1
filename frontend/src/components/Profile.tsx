import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile(): any {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <article>
        {user?.picture && <img src={user.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        {/* ul for debugging purposes */}
        <ul>
          {user &&
            Object.keys(user).map((objKey, k) => (
              <li key={k}>
                {objKey}: {user[objKey]}
              </li>
            ))}
        </ul>
      </article>
    )
  );
}
