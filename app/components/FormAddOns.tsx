import ADD_ONS from '@/assets/add-ons';
import { useFormContext } from '../Context/stroe';
import Navigation from './Navigation';
import METHODS from '@/assets/planMethod';
import { useWindowContext } from '../Context/windowSize';

export default function FormAddOns() {
  const { increceStep, setAddOns, chosenPlanMethodID, addOns } = useFormContext();
  const { isDesktop } = useWindowContext();
  const method = METHODS.find((method) => method.id === chosenPlanMethodID)?.shortName;
  function addOrRemoveAddOns(id: number) {
    setAddOns((prevAddOns) => {
      // Check if prevAddOns is null; return an empty array if it is
      const currentAddOns = prevAddOns || [];

      if (currentAddOns.includes(id)) {
        // Remove the ID if it exists in the add-ons array
        return currentAddOns.filter((addOnId) => addOnId !== id);
      } else {
        // Add the ID if it doesn't exist in the add-ons array
        return [...currentAddOns, id];
      }
    });
  }

  return (
    <form onSubmit={increceStep} className="w-full flex flex-col items-start justify-center">
      <div className={`${isDesktop && 'w-2/3'}  my-5 flex flex-col justify-start gap-4`}>
        {ADD_ONS.map((add_ons) => (
          <div
            className={`border flex items-center justify-between cursor-pointer hover:border-black p-6 rounded-md ${
              addOns?.includes(add_ons.id) && 'border-black bg-slate-50'
            }`}
            onClick={() => addOrRemoveAddOns(add_ons.id)}
            key={add_ons.id}
          >
            <div className="flex gap-2">
              <input checked={addOns?.includes(add_ons.id)} type="checkbox" className="w-4" />
              <div className="text-md">
                <div>{add_ons.name}</div>
                <div className="text-gray-400 text-[0.7rem]">{add_ons.discription}</div>
              </div>
              {/* <div className="text-xs text-gray-600">${chosenPlanMethodID === 2 ? plane.priceForYear + '' + '/' + price: plane.priceForMonth + '' + '/' + price}</div> */}
            </div>
            <div className="text-[0.7rem] text-gray-500">
              +${chosenPlanMethodID === 1 ? add_ons.pricePerMonth : add_ons.pricePerYear}/{method}
            </div>
          </div>
        ))}
      </div>
      <Navigation />
    </form>
  );
}
