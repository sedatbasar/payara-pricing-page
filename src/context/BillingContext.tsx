"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type BillingType = "monthly" | "yearly";

interface BillingContextType {
  billingType: BillingType;
  setBillingType: Dispatch<SetStateAction<BillingType>>;
}

const BillingContext = createContext<BillingContextType | undefined>(undefined);

interface BillingProviderProps {
  children: ReactNode;
}

export function BillingProvider({ children }: BillingProviderProps) {
  const [billingType, setBillingType] = useState<BillingType>("monthly");

  return (
    <BillingContext.Provider value={{ billingType, setBillingType }}>
      {children}
    </BillingContext.Provider>
  );
}

export function useBilling() {
  const context = useContext(BillingContext);
  if (!context) {
    throw new Error("useBilling must be used within a BillingProvider");
  }
  return context;
}
