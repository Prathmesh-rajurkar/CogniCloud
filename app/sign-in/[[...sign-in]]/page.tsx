"use client";

import React from "react";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="max-w-4xl mx-auto flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
}
