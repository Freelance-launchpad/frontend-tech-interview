import { customFetch } from "~/lib/customFetch";

export type Transaction = {
  id: string;
  amount: number;
  date: string;
  reconciled: boolean;
  reference: string;
};

export const transactions = {
  getAll: () =>
    customFetch(`/api/transactions`).then((res) => res.json()) as Promise<
      Transaction[]
    >,
  getById: (id: string) =>
    customFetch(`/api/transactions`)
      .then((res) => res.json())
      .then(
        (transactions: Transaction[]) =>
          transactions.find((transaction) => transaction.id === id) || null
      ),
  reconcile: (input: { transactionId: string; invoiceIds: string[] }) =>
    customFetch(`/api/transactions/${input.transactionId}/reconcile`, {
      method: "POST",
      body: JSON.stringify({ invoice_ids: input.invoiceIds }),
      headers: { "Content-Type": "application/json" },
    }),
};
