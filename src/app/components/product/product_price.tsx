import { cn } from "../../../lib/utils";

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  // ensure two decimal places
  const stringValue = value.toFixed(2);
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl font-semibold", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-sm align-super">.{floatValue}</span>
    </p>
  );
}
