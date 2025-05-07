import { Link } from "react-router";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/home" className="flex items-center">
          <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            The One Network
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1 flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Search..." className="pl-8" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Bell className="h-5 w-5" />
          </Button>
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
