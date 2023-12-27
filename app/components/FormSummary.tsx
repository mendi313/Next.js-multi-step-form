import { useFormContext } from '../Context/stroe';
import Navigation from './Navigation';

export default function FormSummary() {
  const { increceStep } = useFormContext();
  function handleSubmit() {
    increceStep();
  }
  return (
    <form onSubmit={handleSubmit}>
      FormAddOns
      <Navigation goNext={false} />
    </form>
  );
}
