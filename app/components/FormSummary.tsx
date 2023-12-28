import PLANES from '@/assets/planes';
import { useFormContext } from '../Context/stroe';
import Navigation from './Navigation';
import METHODS from '@/assets/planMethod';
import ADD_ONS from '@/assets/add-ons';

export default function FormSummary() {
  const { increceStep, chosenPlanMethodID, chosenPlanId, setCorrentStep, addOns } = useFormContext();
  const plan = PLANES.find((plan) => plan.id === chosenPlanId);
  const method = METHODS.find((method) => method.id === chosenPlanMethodID);
  const chosenAddOns = ADD_ONS.filter((addOn) => addOns?.includes(addOn.id));
  const payForMonth = method?.id === 1;
  const planPrice = (payForMonth ? plan?.priceForMonth : plan?.priceForYear) || 0;
  const addOnsPrice: number = chosenAddOns.reduce((totalPrice, addOn) => {
    const price = payForMonth ? addOn.pricePerMonth : addOn.pricePerYear;
    return totalPrice + price;
  }, 0);
  const total = planPrice + addOnsPrice;

  function handleSubmit() {
    increceStep();
  }
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="rounded-md bg-slate-100 w-3/4 p-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div>
              <div className="font-semibold text-sm">
                {plan?.title}
                {'('}
                {method?.name}
                {')'}
              </div>
              <button className="text-gray-600 underline text-[0.7rem]" onClick={() => setCorrentStep(1)}>
                Change
              </button>
            </div>
            <div className="font-semibold text-sm">
              ${method?.id === 1 ? plan?.priceForMonth : plan?.priceForYear}/{method?.shortName}
            </div>
          </div>
          <div className="h-[0.5px] w-full bg-slate-400"></div>
          <div>
            {chosenAddOns?.map((item) => {
              return (
                <div className="text-gray-600 text-[0.7rem] flex justify-between mt-2" key={item.id}>
                  <div>{item.name}</div>
                  <div>
                    +${payForMonth ? item.pricePerMonth : item.pricePerYear}/{method?.shortName}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-4 w-3/4 text-gray-600 text-[0.7rem] flex justify-between p-4">
        <div>
          Total{'('}
          {payForMonth ? 'per month' : 'per year'}
          {')'}
        </div>
        <div className='text-blue-800 text-lg font-semibold'>+${total}/{method?.shortName}</div>
      </div>
      <Navigation confrim={true} />
    </form>
  );
}
