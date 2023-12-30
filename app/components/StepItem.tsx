import { useWindowContext } from '../Context/windowSize';

export default function StepItem({ index, step, selected }: { index: number; step: Step; selected?: boolean }) {
  const { isDesktop } = useWindowContext();
  return (
    <div className="flex gap-3 items-center" key={index}>
      {isDesktop ? (
        <div>
          <div className={`text-white border border-spacing-1 ${selected && 'bg-zinc-400 text-black'} px-7 p-5 rounded-full`}>{index + 1}</div>
        </div>
      ) : (
        <div>
          <div className={`text-white border border-spacing-1 ${selected && 'bg-blue-300 text-black'} px-4 p-2 rounded-full`}>{index + 1}</div>
        </div>
      )}
      {isDesktop && (
        <div>
          <div className="text-sm text-gray-700">step {index + 1}</div>
          <div className="text-white">{step.title}</div>
        </div>
      )}
    </div>
  );
}
