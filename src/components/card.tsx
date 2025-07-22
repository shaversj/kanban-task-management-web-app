type CardProps = {
  title: string;
  subTasks: {
    title: string;
    isCompleted: boolean;
  }[];
};

export default function Card({ title, subTasks }: CardProps) {
  const getCompletedSubTasks = () => {
    return subTasks.filter((subTask) => subTask.isCompleted).length;
  };

  return (
    <div className="dark:bg-dark-grey rounded-lg bg-white px-4 py-6 shadow-[0px_4px_6px_rgba(54,78,126,0.101545)]">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-heading-m text-black dark:text-white">{title}</h3>
        <p className="text-[12px] font-bold text-[#818fa3]">
          {getCompletedSubTasks()} of {subTasks.length} subtasks
        </p>
      </div>
    </div>
  );
}
