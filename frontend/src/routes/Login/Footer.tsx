import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";

export function Footer() {
  return (
    <CardFooter className="flex flex-col space-y-4">
      <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600">
        Login
      </Button>
    </CardFooter>
  );
}
