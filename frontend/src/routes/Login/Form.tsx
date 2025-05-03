import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Footer } from "./Footer";
import { useIsLoading } from "@/utils/custom-hooks/loading.hook";
import { loginUser } from "@/service/user.service";
import toast from "react-hot-toast";
import { AuthTokensEnum } from "@/utils/enums/auth.enum";
import { useNavigate } from "react-router";

type FormType = {
  email: string;
  password: string;
};

export function Form() {
  const { register, handleSubmit, getValues } = useForm<FormType>();
  const { isLoading, request } = useIsLoading(onSubmit);
  const navigate = useNavigate();

  async function onSubmit() {
    const { email, password } = getValues();
    const res = await loginUser({ email, password });
    toast.success("Login bem sucedido");
    localStorage.setItem(AuthTokensEnum.AUTH_TOKEN, res.authToken);
    localStorage.setItem(AuthTokensEnum.REFRESH_TOKEN, res.refreshToken);
    navigate("/");
  }

  return (
    <CardContent className="space-y-4">
      <form onSubmit={handleSubmit(request)}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Digite o seu email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            {...register("password")}
            id="password"
            type="password"
            placeholder="Digite a sua senha"
            required
          />
        </div>

        <Footer isLoading={isLoading} />
      </form>
    </CardContent>
  );
}
