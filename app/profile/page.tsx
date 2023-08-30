"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function ProfilePage() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Retrieving your info, almost there...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className="flex justify-center items-center flex-col">
        {user.picture && user.name ? (
          <>
            <img className="rounded-full w-20 m-4" src={user.picture} alt={user.name}></img>
            <h2>Welcome {user.name}</h2>
            <p>{user.email}</p>
            <a href="/api/auth/logout">Logout</a>
          </>
        ) : (
          ""
        )}
      </div>
    )
  );
}
