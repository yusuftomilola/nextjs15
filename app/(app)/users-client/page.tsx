"use client";
import { Suspense, useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occured");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading users...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Users List</h1>

      <Suspense fallback={<h1>Loading users...</h1>}>
        <ul className="space-y-4 p-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              <div className="font-bold">{user.name}</div>
              <div className="text-sm">
                <div>Username: {user.username}</div>
                <div>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>
              </div>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
