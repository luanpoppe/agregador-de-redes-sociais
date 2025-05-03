import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Link } from "react-router";

export function Footer({ isLoading }: { isLoading: boolean }) {
  return (
    <CardFooter className="flex flex-col my-6">
      <Button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600"
      >
        {isLoading ? "Carregando..." : "Login"}
      </Button>

      <div className="mt-12 text-sm text-muted-foreground">
        Ainda não possui uma conta?{" "}
        <Link className="text-blue-800" to={"/register"}>
          Cadastre-se
        </Link>
      </div>
    </CardFooter>
  );
}
