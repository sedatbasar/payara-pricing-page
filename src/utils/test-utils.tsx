import { render } from "@testing-library/react";
import { BillingProvider } from "@/context/BillingContext";
import { ReactNode } from "react";

export function renderWithBillingContext(ui: ReactNode) {
  return render(<BillingProvider>{ui}</BillingProvider>);
}
