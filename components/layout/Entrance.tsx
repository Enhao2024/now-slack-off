import Footer from '@/components/layout/Footer';
import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import FingerPrint from './FingerPrint';
import GoogleCaptchaWrapper from '../captcha/GoogleCaptchaWrapper';

const TopBar = dynamic(() => import('@/components/layout/TopBar'), { ssr: false });

interface Props {
  children: ReactNode;
  custom?: string;
}

function Entrance({ children, custom }: Props) {
  const renderMain = () => (
    <>
      <FingerPrint />
      <TopBar />
      <div className={custom || 'my-20 lg:my-32'}>
        {children}
      </div>
      <Footer />
    </>
  );
  return (
    <GoogleCaptchaWrapper>
      <main className="flex min-h-screen flex-col items-center justify-between out-container bg-global">
        {renderMain()}
      </main>
    </GoogleCaptchaWrapper>
  );
}

Entrance.defaultProps = {
  custom: undefined,
};

export default Entrance;
