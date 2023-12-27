import { Switch } from '@headlessui/react';
import { useFormContext } from '../Context/stroe';

export default function CustomSwitch() {
  const { chosenPlanMethodID, switchMethodPlane } = useFormContext();

  const enabled = chosenPlanMethodID === 2 ? true : false;

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={switchMethodPlane}
        className={`${enabled ? 'bg-blue-950' : 'bg-blue-900'}
            relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
              pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
