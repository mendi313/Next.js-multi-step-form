'use client';
import Image from 'next/image';
import Steps from './components/Steps';
import STEPS from '@/assets/steps';
import desktopBackground from '/assets/images/bg-sidebar-desktop.svg';
import mobileBackground from '/assets/images/bg-sidebar-mobile.svg';
import Form from './components/Form';
import { useFormContext } from './Context/stroe';
import { useWindowContext } from './Context/windowSize';

export default function Home() {
  const { currentStep } = useFormContext();
  const { isDesktop } = useWindowContext();
  return (
    <main className={isDesktop ? 'w-5/6 h-screen p-8 relative rounded-lg bg-white flex items-center mx-auto' : ''}>
      {isDesktop ? (
        <div className="flex flex-col lg:flex-row w-full justify-between h-full">
          <div className="relative z-10 flex mt-6 lg:h-full">
            <Steps />
          </div>
          <div className="w-full lg:w-3/5 lg:h-full">
            <h1 className="mt-9 font-bold text-xl text-black">{STEPS[currentStep]?.subtitle}</h1>
            <p className="text-sm text-gray-500">{STEPS[currentStep]?.description}</p>
            <Form />
          </div>
          <div className="w-2/5 absolute inset-0 z-0 p-4">
            <Image priority src={desktopBackground} sizes="100%, 100%" alt="Follow us on Twitter" />
          </div>
        </div>
      ) : (
        <div className=' flex flex-col items-center justify-center'>
          <div className="h-full z-0">
             <Image priority src={mobileBackground} sizes="100%, 100%" alt="Follow us on Twitter" />
            {' '}
          </div>
          <div className="absolute top-0 mt-10 ">
            <Steps />
          </div>
          <div className="p-3 absolute top-[120px] mt-100 w-4/5 rounded-lg bg-white ">
            <h1 className="mt-9 font-bold text-xl text-black">{STEPS[currentStep]?.subtitle}</h1>
            <p className="text-sm text-gray-500">{STEPS[currentStep]?.description}</p>
            <Form />
          </div>
        </div>
      )}
    </main>
  );
}
