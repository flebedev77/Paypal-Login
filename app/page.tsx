"use client";

import LoginForm from "@/components/LoginForm";
import Footer from "@/components/Footer";
import Toast, { ToastType } from "@/components/Toast";

export default function Home() {
  return (
    <>
      <main className="grid place-content-center">
        {/*<Toast
        type={ToastType.Error}
        message="Sorry! there was an error on our end!"
      />*/}
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}
