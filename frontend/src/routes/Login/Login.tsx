import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Form } from "./Form";
import { VoltarInicio } from "./VoltarInicio";
export function Login() {
  return (
    <section className="min-h-screen min-w-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <Toaster />

      <VoltarInicio />
      <Card className="w-full max-w-md shadow-lg border-0">
        <Header />

        <Form />

        <Footer />
      </Card>
    </section>
  );
}
