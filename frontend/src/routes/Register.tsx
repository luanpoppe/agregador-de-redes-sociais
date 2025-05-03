import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUser } from "@/service/user.service";
import { AuthTokensEnum } from "@/utils/enums/auth.enum";
import { FieldValues, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
export function Register() {
  const {
    register,
    handleSubmit,
    formState: errors,
  } = useForm<{
    name: string;
    email: string;
    password: string;
    "password-repeat": string;
  }>({ mode: "onTouched" });

  async function createUserOnSubmit(data: FieldValues) {
    console.log("data: ", data);

    const body: User = {
      email: data.email,
      name: data.name,
      password: data.password,
    };

    const user = await createUser(body);
    toast.success("Usuário criado com sucesso");
    localStorage.setItem(AuthTokensEnum.AUTH_TOKEN, user.authToken);
    localStorage.setItem(AuthTokensEnum.REFRESH_TOKEN, user.authToken);
  }

  function validate() {
    console.log("errors.errors: ", errors.errors);
  }

  return (
    <section>
      <Toaster />
      <form onSubmit={handleSubmit(createUserOnSubmit)} onChange={validate}>
        <Label htmlFor="name">Nome: </Label>
        <Input
          required
          id="name"
          type="text"
          {...register("name", {
            required: true,
            pattern: {
              message: "errado!!",
              value: /\w+\s\w+/,
            },
          })}
        />
        {errors.errors.name && <p className="text-red-500">ERRADO HEIN</p>}

        <Label htmlFor="email">Email: </Label>
        <Input required id="email" type="email" {...register("email")} />

        <Label htmlFor="password">Senha: </Label>
        <Input
          required
          id="password"
          type="password"
          {...register("password")}
        />

        <Label htmlFor="password-repeat">Digite novamente a senha: </Label>
        <Input
          required
          id="password-repeat"
          type="password"
          {...register("password-repeat")}
        />

        <Button disabled={!!Object.keys(errors.errors).length} type="submit">
          Criar conta
        </Button>
      </form>
    </section>
  );
}
