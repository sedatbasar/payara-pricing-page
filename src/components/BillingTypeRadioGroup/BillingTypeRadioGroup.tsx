"use client";

import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { BillingType, useBilling } from "@/context/BillingContext";

const BillingTypeRadioGroup = () => {
  const { setBillingType } = useBilling();
  return (
    <div className="flex items-center space-x-2 mt-[60px] lg:mt-[84px]">
      <strong>Bill me:</strong>
      <RadioGroup
        defaultValue="monthly"
        className="flex items-center gap-2"
        onValueChange={(value) =>
          setBillingType(value as unknown as BillingType)
        }
      >
        <RadioGroupItem value="monthly" id="monthly-billing" />
        <Label htmlFor="monthly-billing">Monthly</Label>
        <RadioGroupItem value="yearly" id="yearly-billing" />
        <Label htmlFor="yearly-billing">Yearly</Label>
        <Badge variant="secondary">Save up to 17%</Badge>
      </RadioGroup>
    </div>
  );
};

export default BillingTypeRadioGroup;
