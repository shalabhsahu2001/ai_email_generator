"use client";
import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ConvexProvider, ConvexReactClient } from "convex/react";
function Provider({children}) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
    return (
    <ConvexProvider client={convex}>
        <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
            <div>{children}</div>
        </GoogleOAuthProvider>
    </ConvexProvider>
  )
}

export default Provider