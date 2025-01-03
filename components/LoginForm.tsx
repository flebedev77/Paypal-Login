import "@/app/globals.css";
import "./components.css";

import Image from "next/image";
import Input from "@/components/Input";
import Button from "@/components/Button";
import Seperator from "@/components/Seperator";
import LanguageBar from "@/components/LanguageBar";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className="border-solid border-gray-200 border rounded-xl p-10 text-center form-container relative">
      <Image
        src="/paypal-mark-color.svg"
        alt="Logo"
        width={34}
        height={40}
        priority={true}
        className="mx-auto logo"
      />
      <Input placeholderText="Email or mobile number" className="login-email" />
      <Link
        href="/forgot"
        className="link font-extraextrabold flex -my-6 -mx-2"
      >
        Forgot email?
      </Link>
      <Button
        text="Next"
        primary={true}
        className="mt-11 bg-blue-800 text-white font-extraextrabold"
        onClick={() => alert()}
      />

      <Seperator />

      <Button
        text="Sign Up"
        primary={false}
        className="bg-white text-black border-black border font-bold"
        onClick={() =>
          (window.location.href =
            "https://www.paypal.com/us/webapps/mpp/account-selection")
        }
      />

      <LanguageBar />
    </div>
  );
}
