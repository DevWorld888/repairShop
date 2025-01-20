import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type NavButtonProps = {
  href?: string;
  label: string;
  Icon: LucideIcon;
};

export const NavButton: React.FC<NavButtonProps> = ({ href, label, Icon }) => {
  return (
        <Button
          variant={"ghost"}
          size={"icon"}
          aria-label={label}
          className="rounded-full"
          asChild
        >
          {href ? (
            <Link href={href}>
              <Icon/>
            </Link>
          ):(<Icon/> )}
        </Button>
    );
}