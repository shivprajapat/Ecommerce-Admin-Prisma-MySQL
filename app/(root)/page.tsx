"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function Home() {
  const opOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      opOpen();
    }
  }, [opOpen, isOpen]);
  return <div className="text-center">Root Page</div>;
}
