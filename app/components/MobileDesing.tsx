'use client';
import Image from 'next/image';
import Steps from './Steps';
import STEPS from '@/assets/steps';
import mobileBackground from '/assets/images/bg-sidebar-mobile.svg';
import Form from './Form';
import { useFormContext } from '../Context/stroe';
export default function MobileDesing() {
  const { currentStep } = useFormContext();
  return (
    <div >
      <div className="absolute top-0 inset-0 z-[-1000]">
        <Image priority src={mobileBackground} sizes="100%, 100%" alt="Follow us on Twitter" />{' '}
      </div>
      <div className="mt-5 flex gap-10 flex-col items-center justify-center mb-32">
        <div className="mt-10">
          <Steps />
        </div>
        <div className="p-3 w-4/5 rounded-lg bg-white ">
          <h1 className="mt-9 font-bold text-xl text-black">{STEPS[currentStep]?.subtitle}</h1>
          <p className="text-sm text-gray-500">{STEPS[currentStep]?.description}</p>
          <Form />
        </div>
      </div>
    </div>
  );
}
