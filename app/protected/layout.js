'use client';

import { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

export default function ProtectedLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser();
        setUser(authUser);
      } catch (err) {
        window.location.href = '/login'; // Redirect if not logged in
      }
    };
    checkUser();
  }, []);

  if (!user) return <div>Loading...</div>;

  return <>{children}</>;
}
