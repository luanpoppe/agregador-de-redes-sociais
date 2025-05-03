import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Header() {
  return (
    <CardHeader className="space-y-1">
      <div className="flex justify-center mb-2">
        <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
          </svg>
        </div>
      </div>
      <CardTitle className="text-2xl text-center font-bold">
        Bem vindo de volta!
      </CardTitle>
      <CardDescription className="text-center">
        Faça o login em sua conta para continuar
      </CardDescription>
    </CardHeader>
  );
}
