import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import {
  Bell,
  Bookmark,
  Home,
  LogOut,
  MessageSquare,
  Settings,
  User,
} from "lucide-react";

export function LeftSidebar() {
  return (
    <aside className="w-full md:w-64 shrink-0">
      <div className="sticky top-20 bg-white rounded-lg shadow-sm p-4 space-y-2">
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to="/home">
            <Home className="mr-2 h-5 w-5" />
            Home
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to="#">
            <User className="mr-2 h-5 w-5" />
            Profile
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to="#">
            <MessageSquare className="mr-2 h-5 w-5" />
            Messages
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to="#">
            <Bell className="mr-2 h-5 w-5" />
            Notifications
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to="#">
            <Bookmark className="mr-2 h-5 w-5" />
            Bookmarks
          </Link>
        </Button>
        <Button variant="ghost" className="w-full justify-start" asChild>
          <Link to="#">
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
          asChild
        >
          <Link to="/sign-in">
            <LogOut className="mr-2 h-5 w-5" />
            Logout
          </Link>
        </Button>
      </div>
    </aside>
  );
}
