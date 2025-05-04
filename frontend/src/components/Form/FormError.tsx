import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

export function FormError({ error }: Props) {
  if (error) return <p className="text-sm text-red-500">{error?.message}</p>;
}
