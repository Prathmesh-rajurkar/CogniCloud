"use client";

import { SignUp } from "@clerk/nextjs";
import React from "react";


export default function SignUpPage() {
  return (
    <div className="p-4 max-w-4xl mx-auto flex items-center justify-center">
      <SignUp/>
    </div>
  );
}
