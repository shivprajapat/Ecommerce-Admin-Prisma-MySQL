"use client";

import { FC, useState } from "react";
import { Check, Copy, Server } from "lucide-react";
import { toast } from "react-hot-toast";

import { Alert, AlertDescription, AlertTitle } from "./alert";
import { Button } from "./button";
import { Badge, BadgeProps } from "@/components/ui/badge";

interface ApiAlertProps {
  title: string;
  description: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: FC<ApiAlertProps> = ({
  title,
  description,
  variant = "public",
}) => {
  const [isCopy, setIsCopy] = useState(false);
  const onCopy = () => {
    toast.success("API Route copied to clipboard.");
    setIsCopy(!isCopy);
    navigator.clipboard.writeText(description);
  };
  return (
    <Alert>
      <Server className="w-4 h-4" />
      <AlertTitle className="flex items-center gap-x-2">
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className="mt-4 flex items-center justify-between">
        <code className="relative rounded  bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <Button
          variant={isCopy ? "destructive" : "outline"}
          size="sm"
          onClick={onCopy}
        >
          {isCopy ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </AlertDescription>
    </Alert>
  );
};