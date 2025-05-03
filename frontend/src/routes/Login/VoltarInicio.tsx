import { Link } from "react-router";

export function VoltarInicio() {
  return (
    <Link
      className="absolute top-4 left-4 text-sm font-medium flex items-center text-gray-600 hover:text-gray-900"
      to={"/"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1 h-4 w-4"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
      Voltar ao início
    </Link>
  );
}
