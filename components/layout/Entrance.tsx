import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";
import FingerPrint from "./FingerPrint";
import dynamic from "next/dynamic";
import GoogleCaptchaWrapper from "../captcha/GoogleCaptchaWrapper";

const TopBar = dynamic(() => import("@/components/layout/TopBar"), { ssr: false })

type Props = {
  children: ReactNode;
  custom?: string;
};

const Entrance = ({ children, custom }: Props) => {

  const renderMain = () => {
    return (
      <>
        <FingerPrint />
        <TopBar />
        <div className={custom ? custom : "my-20 lg:my-32"}>
          {children}
        </div>
        <Footer />
      </>
    );
  }
  return (
    <GoogleCaptchaWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between out-container bg-global">
        {renderMain()}
      </main>
    </GoogleCaptchaWrapper>
  );
}

export default Entrance