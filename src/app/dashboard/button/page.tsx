"use client";

import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ReloadIcon } from "@radix-ui/react-icons";

const Page = () => {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Button onClick={() => console.log("onClick")} capitalize={false}>
        capitalize false
      </Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button disabled>disabled</Button>

      <Button size="sm">small</Button>
      <Button size="default">medium</Button>
      <Button size="lg">large</Button>

      <Button>
        <ReloadIcon className="animate-spin" />
      </Button>

      <Button>
        <ChevronDownIcon />
        <span>with icon</span>
      </Button>
    </div>
  );
};

export default Page;
