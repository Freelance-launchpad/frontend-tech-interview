import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/Transactions.tsx"),
  route(":transactionId/reconcile", "./routes/Reconcile.tsx"),
] satisfies RouteConfig;
