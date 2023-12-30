import STEPS from '@/assets/steps';
import StepItem from './StepItem';
import { useFormContext } from '../Context/stroe';

export default function Steps() {
  const { currentStep: correntStep } = useFormContext();
  return (
    <div className="max-[380px]:flex-row flex flex-col gap-6">
      {STEPS.map((step, index) => {
        return <StepItem selected={correntStep === index} key={index} index={index} step={step} />;
      })}
    </div>
  );
}
