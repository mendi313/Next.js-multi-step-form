import { useFormContext } from '../Context/stroe';
import { useWindowContext } from '../Context/windowSize';

export default function Navigation({ goBack = true, goNext = true, confrim = false }: { confrim?: boolean; goNext?: boolean; goBack?: boolean }) {
  const { decreceStep } = useFormContext();
  const { isDesktop } = useWindowContext();

  return (
    <div className={isDesktop ? 'w-2/3 mt-5 flex justify-between' : 'p-4 fixed bg-white bottom-0 left-0 right-0 flex justify-between'}>
      {goBack ? (
        <button onClick={decreceStep} className="p-2" type="submit">
          Go Back
        </button>
      ) : (
        <div></div>
      )}
      {goNext && (
        <button className="bg-blue-900 p-2 rounded-lg text-white" type="submit">
          {confrim ? 'Confrim' : 'Next Step'}
        </button>
      )}
    </div>
  );
}
