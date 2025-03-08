"use client";

import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsMicrosoft } from "react-icons/bs";
import { IoLogoFacebook } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

type Providers = "google" | "github" | "azure-ad" | "facebook" | "linkedin";

export const Social = () => {
  const onClick = (providers: Providers) => {
    signIn(providers, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };
  return (
    <div className="flex items-center justify-center w-full flex-wrap gap-2">
      <Button
        size="lg"
        className="w-24"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <FcGoogle size={22} />
      </Button>
      <Button
        size="lg"
        className="w-24"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <FaGithub size={22} />
      </Button>
      <Button
        size="lg"
        className="w-24"
        variant="outline"
        onClick={() => onClick("azure-ad")}
      >
        <BsMicrosoft size={22} />
      </Button>
      <Button
        size="lg"
        className="w-24"
        variant="outline"
        onClick={() => onClick("facebook")}
      >
        <IoLogoFacebook color="blue" size={22} />
      </Button>
      <Button
        size="lg"
        className="w-24"
        variant="outline"
        onClick={() => onClick("linkedin")}
      >
        <FaLinkedin color="blue" size={22} />
      </Button>
    </div>
  );
};
