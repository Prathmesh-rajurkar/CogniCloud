"use client";
import { signUpSchema } from "@/schema/signUpSchema";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

function SignUpForm() {
  const router = useRouter();
  const [verifying, setVerifying] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const { signUp, isLoaded, setActive } = useSignUp();
  const [verificationError, setVerificationError] = useState<string | null>(
    null
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    if (!isLoaded) return;
    setIsSubmitting(true);
    setAuthError(null);
    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
      });
      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setVerifying(true);
    } catch (error: any) {
      console.error("Error during sign up:", error);
      setAuthError(
        error.errors?.[0].message ||
          "An unexpected error occurred during sign up."
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleVerification = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLoaded || !signUp) return;
    setIsSubmitting(true);
    setAuthError(null);
    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: verificationCode,
      });
      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/dashboard");
      } else {
        console.error("Verification failed:", result.status);
        setVerificationError(
          "Verification failed. Please check your code and try again."
        );
      }
    } catch (error: any) {
      setVerificationError(
        error.errors?.[0].message ||
          "An unexpected error occurred during verification."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (verifying)
    return (
      <div>
        <h2 className="text-lg font-semibold mb-4">Verify Your Email</h2>
        <form onSubmit={handleVerification}>

          
        </form>
      </div>
    );
  return (
    <div className="">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div></div>
      </form>
    </div>
  );
}

export default SignUpForm;
