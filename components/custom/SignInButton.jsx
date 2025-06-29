"use client";
import React from 'react'
import { Button } from '../ui/button';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

function SignInButton() {
    const createUser = useMutation(api.users.createUser);
    const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
        console.log(tokenResponse);
        const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        { headers: { Authorization: 'Bearer '+tokenResponse?.access_token} },
        );

        console.log(userInfo.data);
        const user = userInfo.data;
        //localSave
        if(typeof window !== undefined) {
            localStorage.setItem('userDetail', JSON.stringify(user));
        }
        // save to database
        try {
                await createUser({
                name:user?.name,
                email:user?.email,
                picture:user?.picture
            });
            console.log("data saved to convxex");
        } catch (error) {
            console.log("unable to save data", error);
        }
    },
    onError: errorResponse => console.log(errorResponse),
    });
    return (
        <div>
            <Button onClick={googleLogin}>
                Get Started
            </Button>
        </div>
    )
}

export default SignInButton