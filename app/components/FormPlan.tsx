import PLANENS from '@/assets/planes';
import Image from 'next/image';
import CustomSwitch from './CustomSwitch';
import { useFormContext } from '../Context/stroe';
import Navigation from './Navigation';
import METHODS from '@/assets/planMethod';

export default function FormPlan() {
  const { increceStep, setChosenPlanId, chosenPlanId, chosenPlanMethodID } = useFormContext();
  const price = METHODS.find((method) => method.id === chosenPlanMethodID)?.shortName || ''; 

  return (
    <form onSubmit={increceStep} className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-row justify-start gap-16">
        {PLANENS.map((plane) => (
          <div
            onClick={() => setChosenPlanId(plane.id)}
            className={`border cursor-pointer hover:border-black p-4 rounded-md ${chosenPlanId === plane.id && 'border-black bg-slate-200'}`}
            key={plane.id}
          >
            <div className="relative" style={{ padding: '3px', width: '100px', height: '100px' }}>
              <Image src={plane.icon} alt={plane.title} />
            </div>
            <div className="text-md">{plane.title}</div>
            <div className="text-xs text-gray-600">${chosenPlanMethodID === 2 ? plane.priceForYear + '' + '/' + price: plane.priceForMonth + '' + '/' + price}</div>
          </div>
        ))}
      </div>
      <div className="w-full font-medium p-4 mt-3 flex items-center gap-12 justify-center rounded-md bg-gray-300">
        <label className={`${chosenPlanMethodID === METHODS[1].id ? 'text-gray-500' : 'text-black'}`}>{METHODS[0].name}</label>
        <CustomSwitch />
        <label className={`${chosenPlanMethodID === METHODS[0].id ? 'text-gray-500' : 'text-black'}`}>{METHODS[1].name}</label>
      </div>
      <Navigation />
    </form>
  );
}
