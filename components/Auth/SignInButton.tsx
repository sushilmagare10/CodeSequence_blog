"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const SigninButton = () => {

    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="hidden lg:flex capitalize cursor-pointer">
                <button onClick={() => signOut()} className="navUnderlineHover mr-2">
                    Sign Out
                </button>
            </div>
        );
    }
    return (
        <button onClick={() => signIn()} className="navUnderlineHover ">
            Sign In
        </button>
    );
};

export default SigninButton;