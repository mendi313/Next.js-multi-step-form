import { useFormContext } from '../Context/stroe';

export default function Navigation({ goBack = true, goNext = true }: { goNext?: boolean; goBack?: boolean }) {
  const { decreceStep } = useFormContext();
  return (
    <div className="w-2/3 mt-5 flex justify-between">
      {goBack ? (
        <button onClick={decreceStep} className="p-2 " type="submit">
          Go Back
        </button>
      ) : (
        <div></div>
      )}
      {goNext && (
        <button className="bg-blue-900 p-2 rounded-lg text-white" type="submit">
          Next Step
        </button>
      )}
    </div>
  );
}
