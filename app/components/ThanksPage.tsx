import Image from 'next/image';
import ThankIcon from '@/assets/images/icon-thank-you.svg';
export default function ThanksPage() {
  return (
    <div className="flex flex-col w-2/3 gap-4 items-center h-full mt-20 justify-center">
      <div className="relative" style={{ padding: '3px', width: '100px', height: '100px' }}>
        <Image src={ThankIcon} alt="" />
      </div>
      <div className='text-2xl font-bold'>Thank You</div>
      <div className=' text-center text-gray-500 text-[0.8rem]'>Thank you for subscribing! We are excited to keep you updated with the latest news and offers</div>
    </div>
  );
}
