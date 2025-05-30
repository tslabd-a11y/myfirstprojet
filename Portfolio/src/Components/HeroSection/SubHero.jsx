export default function SpinningBar() {
  const items = [
    "FAST LEARNER",
    "TEAM WORK",
    "CREATIVE",
    "ADAPTABLE",
    "PROBLEM SOLVER",
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-brown p-8 gap-4 border-y border-lightGrey uppercase text-2xl w-full">
      <div className="inline-block animate-scroll whitespace-nowrap">
        {items.concat(items).map((item, idx) => {
          return (
            <span key={idx} className="px-10 text-lightGrey tracking-wide">
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
