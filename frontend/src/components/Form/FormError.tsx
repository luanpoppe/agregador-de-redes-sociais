import { FieldError } from "react-hook-form";

type Props = {
  error: FieldError | undefined;
};

export function FormError({ error }: Props) {
  if (error)
    return <p className="!mt-1 !mb-3 text-sm text-red-500">{error?.message}</p>;
}
