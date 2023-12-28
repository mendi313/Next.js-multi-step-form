export default function StepItem({ index, step, selected }: { index: number; step: Step; selected?: boolean }) {
  return (
    <div  className="flex gap-3 items-center" key={index}>
      <div>
        <div className={`text-white border border-spacing-1 ${selected && 'bg-zinc-400 text-black'} px-7 p-5 rounded-full`}>{index + 1}</div>
      </div>
      <div>
        <div className="text-sm text-gray-700">step {index + 1}</div>
        <div className="text-white">{step.title}</div>
      </div>
    </div>
  );
}
