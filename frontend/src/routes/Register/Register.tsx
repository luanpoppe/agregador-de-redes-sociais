import { Toaster } from "react-hot-toast";
import { VoltarInicio } from "../Login/VoltarInicio";
import { Card } from "@/components/ui/card";
import { Header } from "./Header";
import { Form } from "./Form";
import { Footer } from "./Footer";
export function Register() {
  return (
    <section>
      <Toaster />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-4">
        <VoltarInicio />

        <Card className="w-full max-w-md shadow-lg border-0">
          <Header />

          <Form />

          <Footer />
        </Card>
      </div>
    </section>
  );
}
