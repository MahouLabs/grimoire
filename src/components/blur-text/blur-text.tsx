import { cn } from "@utils/cn";

type BlurTextProps = {
  text: string;
  className?: string;
};

export function BlurText({ text, className, ...props }: BlurTextProps) {
  const words = text.split(" ");

  return (
    <span className="text-balance text-center">
      {words.map((word, index) => (
        <span
          key={word}
          className={cn("inline-block animate-blur-text opacity-0", className)}
          style={{ animationDelay: `${index * 60}ms` }}
          {...props}
        >
          {word}
          {index < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
