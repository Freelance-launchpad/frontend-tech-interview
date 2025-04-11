import { useQuery } from "@tanstack/react-query";
import { api } from "~/api";
import type { Transaction } from "~/api/transaction";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableRowLink,
} from "~/components/ui/table";
import { safeOp } from "~/lib/utils";

export default function Transactions() {
  const { data = [] } = useQuery({
    queryKey: ["transactions"],
    queryFn: api.transactions.getAll,
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Transaction</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((transaction) => (
          <TableRowLink
            key={transaction.id}
            to={{ pathname: `${transaction.id}/reconcile` }}
          >
            <TableCell className="font-medium">
              {transaction.reference}
            </TableCell>
            <TableCell className="text-right">
              {safeOp(transaction.amount / 100).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </TableCell>
          </TableRowLink>
        ))}
      </TableBody>
    </Table>
  );
}
