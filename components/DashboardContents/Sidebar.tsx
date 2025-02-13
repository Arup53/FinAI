import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Sidebar = () => {
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div
      className={`flex flex-col gap-2 h-[100vh] border-r  ${
        !hidden ? "w-[15%]" : "w-[8%]"
      }`}
    >
      <Button variant="ghost" onClick={() => setHidden(!hidden)}>
        Open
      </Button>
      <div
        className={`flex flex-col h-full overflow-y-hidden ${
          hidden ? "hidden " : "block "
        }`}
      >
        <Link href="/dashboard/predictor">Predict AI</Link>
      </div>
    </div>
  );
};

export default Sidebar;
