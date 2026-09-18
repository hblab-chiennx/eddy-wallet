const FAMILY = { parent: "Dad", child: "Mia", balance: 42.5, allowance: 5, cadence: "Every Sunday", interest: 2 };

const LEDGER = [
  { id: 1, type: "spend", title: "Comic book", meta: "Today · Mia asked", amount: 4.25, pending: true },
  { id: 2, type: "spend", title: "Cinema ticket with Sam", meta: "Today · Mia asked", amount: 8, pending: true },
  { id: 3, type: "allowance", title: "Weekly allowance", meta: "Sun 16 Mar · automatic", amount: 5 },
  { id: 4, type: "repayment", title: "Lego loan payment", meta: "Sun 16 Mar · automatic", amount: 2 },
  { id: 5, type: "interest", title: "Savings interest", meta: "1 Mar · 2% on $40", amount: 0.8 },
  { id: 6, type: "withdraw", title: "Cash for the school fair", meta: "Sat 8 Mar · by Dad", amount: 10, parentOnly: true },
  { id: 7, type: "lesson", title: "Saving vs. spending", meta: "Mon 10 Mar · marked done", points: 10 },
  { id: 8, type: "loan", title: "Loan for a Lego set", meta: "2 Mar · approved by Dad", amount: 20, parentOnly: true },
  { id: 9, type: "deposit", title: "Birthday money", meta: "28 Feb · from Grandma", amount: 15, parentOnly: true },
  { id: 10, type: "spend", title: "Ice cream", meta: "22 Feb · logged after the fact", amount: 3.5 },
];

const PENDING = LEDGER.filter(l => l.pending);
const LOAN = { reason: "Lego set", borrowed: 20, repaid: 12, dueLabel: "$2 every Sunday · 4 payments left", status: "on-track" };

Object.assign(window, { FAMILY, LEDGER, PENDING, LOAN });
