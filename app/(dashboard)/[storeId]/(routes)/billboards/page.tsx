import Heading from "@/components/ui/heading";
import { BillboardClient } from "./components/client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const BillboardsPage = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardsPage;
