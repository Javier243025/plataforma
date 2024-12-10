'use client'

import { useRouter } from "next/navigation";
import { AUTHENTICATED, UNAUTHENTICATED, useAuth } from "../hooks/use-auth";
import { Loader } from '../components/loader'
import { useEffect } from "react";

export default function Home() {
  const { userState } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if(userState === UNAUTHENTICATED) {
      router.replace('/login');
    } else if(userState === AUTHENTICATED) {
      router.replace('/home');
    }
  }, [ userState ])

  return (
    <div className="w3-display-container" style={{ height: '100vh' }}>
      <div className="w3-display-middle">
        <Loader />
      </div>
    </div>
  );
}
