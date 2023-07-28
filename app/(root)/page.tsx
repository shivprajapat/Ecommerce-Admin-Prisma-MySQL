import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-lg text-rose-700">This is a Protected Route!</h1>
      <Button>click me</Button>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
