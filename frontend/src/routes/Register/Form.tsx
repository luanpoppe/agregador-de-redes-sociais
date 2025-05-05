import { ButtonPurpleGradient } from "@/components/Buttons/ButtonPurpleGradient";
import { FormError } from "@/components/Form/FormError";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createUser } from "@/service/user.service";
import { useIsLoading } from "@/utils/custom-hooks/loading.hook";
import { AuthTokensEnum } from "@/utils/enums/auth.enum";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function Form() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: errors,
  } = useForm<RegisterModel>({ mode: "onTouched", reValidateMode: "onChange" });

  const { isLoading, request } = useIsLoading(createUserOnSubmit);
  const navigate = useNavigate();

  async function createUserOnSubmit() {
    const { password, email, name } = getValues();
    const body: User = {
      email,
      name,
      password,
    };

    const user = await createUser(body);
    toast.success("Usuário criado com sucesso");
    localStorage.setItem(AuthTokensEnum.AUTH_TOKEN, user.authToken);
    localStorage.setItem(AuthTokensEnum.REFRESH_TOKEN, user.authToken);
    navigate("/");
  }

  function validate() {
    console.log("errors.errors: ", errors.errors);
  }

  return (
    <CardContent className="space-y-4">
      <form onSubmit={handleSubmit(request)} onChange={validate}>
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Digite seu nome completo"
            required
            {...register("name", {
              required: {
                value: true,
                message: "Por favor digite um nome.",
              },
              pattern: {
                message:
                  "Por favor digite um nome válido com pelo menos um nome e um sobrenome.",
                value: /\w+\s\w+/,
              },
              minLength: {
                message: "Digite um nome válido",
                value: 3,
              },
            })}
          />
          <FormError error={errors.errors.name} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Digite seu email"
            required
            {...register("email", {
              required: {
                value: true,
                message: "Por favor digite um email.",
              },
              pattern: {
                message: "Por favor digite um email válido.",
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              },
            })}
          />
          <FormError error={errors.errors.email} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            required
            {...register("password", {
              required: {
                value: true,
                message: "Por favor digite uma senha.",
              },
              minLength: {
                value: 4,
                message: "A senha deve ter no mínimo 4 caracteres.",
              },
            })}
          />
          <FormError error={errors.errors.password} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password-repeat">Confirmar Senha</Label>
          <Input
            id="password-repeat"
            type="password"
            placeholder="Confirme sua senha"
            required
            {...register("password-repeat", {
              required: {
                value: true,
                message: "Por favor confirme sua senha.",
              },
              validate: (senha) => {
                const senhaOriginal = getValues().password;
                if (senha === senhaOriginal) return true;
                return "Por favor, digite a mesma senha que você digitou no campo anterior.";
              },
            })}
          />
          <FormError error={errors.errors["password-repeat"]} />
        </div>

        <ButtonPurpleGradient
          type="submit"
          disabled={!!Object.keys(errors.errors).length}
        >
          {isLoading ? "Carregando..." : "Cadastrar"}
        </ButtonPurpleGradient>
      </form>
    </CardContent>
  );
}
