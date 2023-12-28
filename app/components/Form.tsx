import FormInfo from './FormInfo';
import FormPlan from './FormPlan';
import FormAddOns from './FormAddOns';
import FormSummary from './FormSummary';
import { useFormContext } from '../Context/stroe';
import ThanksPage from './ThanksPage';

export default function Form() {
  const { correntStep } = useFormContext();
  let componentToRender = null;

  switch (correntStep) {
    case 0:
      componentToRender = <FormInfo />;
      break;
    case 1:
      componentToRender = <FormPlan />;
      break;
    case 2:
      componentToRender = <FormAddOns />;
      break;
    case 3:
      componentToRender = <FormSummary />;
      break;
    case 4:
      componentToRender = <ThanksPage />;
      break;
    default:
      componentToRender = null;
  }

  return <div className="w-full flex flex-col mt-2 gap-2 items-center">{componentToRender}</div>;
}
