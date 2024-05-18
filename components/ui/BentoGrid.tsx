import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
    className={cn(
      // Responsive grid layout:
      // - Base (small screens): 1 column
      // - Medium screens: 6 columns
      // - Large screens: 5 columns
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5",
  
      // Consistent gap between grid items on all screen sizes:
      "gap-8",  // Increased gap from 4 to 8 for more spaciousness
  
      // Removed automatic row height adjustment on medium screens:
      // This gives you more control over row heights using other CSS properties or Tailwind classes.
  
      // Center the grid container horizontally within its parent:
      "mx-auto",
  
      className // Additional classes from the 'className' prop
    )}
  >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number,
  img?: string,
  imgClassName?: string,
  titleClassName?: string,
  spareImg?: string,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(1,51,126,1) 100%, rgba(0,166,255,1) 100%)'
      }}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
