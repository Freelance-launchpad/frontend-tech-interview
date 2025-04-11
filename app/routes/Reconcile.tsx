import type { Route } from "./+types/Reconcile";

export default function Home({
  params: { transactionId },
}: Route.ComponentProps) {
  return (
    <div>
      <p>transactionId: {transactionId}</p>
    </div>
  );
}
