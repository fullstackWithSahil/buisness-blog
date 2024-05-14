import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function MobileNav() {
  return (
    <Popover>
      <PopoverTrigger asChild className="sm:hidden justify-items-end">
        <HamburgerMenuIcon />
      </PopoverTrigger>
      <PopoverContent className="bg-blue-500 p-4 dark:bg-black border-2 border-white rounded-md w-fit">
        <ul className="flex capitalize flex-col">
          <li>
            <a href={"/register"}>Register</a>
          </li>
          <li>
            <a href={"/login"}>Login</a>
          </li>
          <li>
            <a href={"/blog"}>Blog</a>
          </li>
          <li>
            <a href={"/documentation"}>Documentation</a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
