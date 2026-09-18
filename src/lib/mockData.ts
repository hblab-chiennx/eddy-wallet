import type { FamilyState, Lesson } from "./types";

const LESSONS: Lesson[] = [
  {
    id: "wallet-basics",
    title: "What's in a wallet?",
    blurb: "Your balance is just what's left.",
    minutes: 2,
    state: "done",
    body: "Your wallet balance is simply the money you've been given, minus what you've spent or lent out. Every deposit adds to it, every purchase or withdrawal takes away from it.",
  },
  {
    id: "saving-vs-spending",
    title: "Saving vs. spending",
    blurb: "Why waiting can get you more.",
    minutes: 4,
    state: "done",
    body: "Spending gets you something now. Saving means waiting, but it can mean getting something bigger later — and sometimes your saved money even grows a little on its own.",
  },
  {
    id: "what-is-interest",
    title: "What is interest?",
    blurb: "Money that grows while it waits.",
    minutes: 3,
    state: "available",
    body: "Interest is a small bonus added to money that sits in savings instead of being spent. The longer it waits, the more it can grow.",
  },
  {
    id: "borrowing",
    title: "Borrowing and paying back",
    blurb: "A loan is a promise.",
    minutes: 4,
    state: "locked",
    body: "A loan lets you get something now and pay for it a little at a time. It's a promise — and keeping promises on time matters.",
  },
  {
    id: "needs-wants",
    title: "Needs and wants",
    blurb: "Both are fine. They're different.",
    minutes: 3,
    state: "locked",
    body: "A need is something you can't really do without. A want is something nice to have. Knowing the difference helps you decide what to spend on first.",
  },
  {
    id: "making-a-plan",
    title: "Making a plan",
    blurb: "Pick a goal, then split your money.",
    minutes: 5,
    state: "locked",
    body: "A money plan is just deciding ahead of time how much you'll save, spend, and maybe give — before the money shows up, not after.",
  },
];

export function createInitialFamilyState(): FamilyState {
  return {
    family: {
      parent: { id: "parent-1", name: "Dad" },
      child: {
        id: "child-1",
        name: "Mia",
        pin: "1234",
        balance: 42.5,
        savingsGoal: { label: "New bike helmet", target: 60 },
      },
      allowanceAmount: 5,
      allowanceCadence: "Every Sunday",
      interestRatePercent: 2,
    },
    ledger: [
      { id: "1", type: "spend", title: "Comic book", meta: "Today · Mia asked", amount: 4.25, pending: true, createdAt: "2026-09-18" },
      { id: "2", type: "spend", title: "Cinema ticket with Sam", meta: "Today · Mia asked", amount: 8, pending: true, createdAt: "2026-09-18" },
      { id: "3", type: "allowance", title: "Weekly allowance", meta: "Sun 13 Sep · automatic", amount: 5, createdAt: "2026-09-13" },
      { id: "4", type: "repayment", title: "Bike helmet loan payment", meta: "Sun 13 Sep · automatic", amount: 2, createdAt: "2026-09-13" },
      { id: "5", type: "interest", title: "Savings interest", meta: "1 Sep · 2% on $40", amount: 0.8, createdAt: "2026-09-01" },
      { id: "6", type: "withdraw", title: "Cash for the school fair", meta: "Sat 5 Sep · by Dad", amount: 10, parentOnly: true, createdAt: "2026-09-05" },
      { id: "7", type: "lesson", title: "Saving vs. spending", meta: "Mon 7 Sep · marked done", points: 10, createdAt: "2026-09-07" },
      { id: "8", type: "loan", title: "Loan for a bike helmet", meta: "2 Sep · approved by Dad", amount: 20, parentOnly: true, createdAt: "2026-09-02" },
      { id: "9", type: "deposit", title: "Birthday money", meta: "28 Aug · from Grandma", amount: 15, parentOnly: true, createdAt: "2026-08-28" },
      { id: "10", type: "spend", title: "Ice cream", meta: "22 Aug · logged after the fact", amount: 3.5, createdAt: "2026-08-22" },
    ],
    loans: [
      {
        id: "loan-1",
        reason: "Bike helmet",
        borrowed: 20,
        repaid: 12,
        dueLabel: "$2 every Sunday · 4 payments left",
        status: "on-track",
      },
    ],
    allowanceRule: {
      amount: 5,
      frequency: "weekly",
      cadenceLabel: "Every Sunday",
      autoDeposit: true,
      savingsInterestEnabled: true,
      savingsInterestPercent: 2,
    },
    lessons: LESSONS,
    spendRequests: [
      { id: "req-1", amount: 4.25, reason: "Comic book", requestedAt: "2026-09-18", status: "pending" },
      { id: "req-2", amount: 8, reason: "Cinema ticket with Sam", requestedAt: "2026-09-18", status: "pending" },
    ],
  };
}
