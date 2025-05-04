import { CardFooter } from "@/components/ui/card";
import { Link } from "react-router";

export function Footer() {
  return (
    <CardFooter className="flex flex-col space-y-4">
      <div className="text-center text-sm">
        Já possui uma conta?{" "}
        <Link className="text-blue-800" to={"/register"}>
          Entrar
        </Link>
      </div>
    </CardFooter>
  );
}
