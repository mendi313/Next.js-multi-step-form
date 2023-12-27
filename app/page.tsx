'use client';
import Image from 'next/image';
import Steps from './components/Steps';
import STEPS from '@/assets/steps';
import backgound from '/assets/images/bg-sidebar-desktop.svg';
import Form from './components/Form';
import { useFormContext } from './Context/stroe';

export default function Home() {
  const { correntStep } = useFormContext();
  return (
    <main className="w-5/6 h-screen p-8 relative rounded-lg bg-white flex items-center mx-auto">
      <div className="flex flex-row w-full justify-between h-full">
        <div className="relative z-10 flex mt-6 h-full">
          <Steps />
        </div>
        <div className="w-3/5 h-full">
          <h1 className="mt-9 font-bold text-xl text-black">{STEPS[correntStep].subtitle}</h1>
          <p className="text-sm text-gray-500">{STEPS[correntStep].description}</p>
          <Form />
        </div>
        <div className=" w-2/5 absolute inset-0 z-0 p-4">
          <Image priority src={backgound} sizes="100%, 100%" alt="Follow us on Twitter" />
        </div>
      </div>
    </main>
  );
}
