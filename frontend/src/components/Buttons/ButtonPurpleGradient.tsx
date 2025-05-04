import { Button, ButtonProps } from "../ui/button";

type Props = ButtonProps;

export function ButtonPurpleGradient({
  disabled = false,
  type = "button",
  className,
  children,
  ...props
}: Props) {
  return (
    <Button
      disabled={disabled}
      type={type}
      className={`mt-8 w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
}
