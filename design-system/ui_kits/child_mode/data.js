const CHILD = { name: "Mia", balance: 42.5, allowance: 5, interest: 2, savedThisMonth: 8 };

const ACTIVITY = [
  { id: 1, type: "allowance", title: "Weekly allowance", meta: "Sunday · from Dad", amount: 5 },
  { id: 2, type: "spend", title: "Comic book", meta: "Tuesday · waiting on Dad", amount: 4.25, pending: true },
  { id: 3, type: "interest", title: "Savings interest", meta: "1 March · 2% on $40", amount: 0.8 },
  { id: 4, type: "lesson", title: "Saving vs. spending", meta: "Finished Monday", points: 10 },
  { id: 5, type: "repayment", title: "Lego loan payment", meta: "Sunday · automatic", amount: 2 },
  { id: 6, type: "allowance", title: "Weekly allowance", meta: "Last Sunday · from Dad", amount: 5 },
  { id: 7, type: "spend", title: "Ice cream", meta: "Saturday · logged by Mia", amount: 3.5 },
  { id: 8, type: "loan", title: "Borrowed for a Lego set", meta: "2 March · from Dad", amount: 20 },
  { id: 9, type: "deposit", title: "Birthday money", meta: "28 Feb · from Grandma", amount: 15 },
];

const LESSONS = [
  { id: 1, title: "What's in a wallet?", blurb: "Your balance is just what's left.", minutes: 2, state: "done" },
  { id: 2, title: "Saving vs. spending", blurb: "Why waiting can get you more.", minutes: 4, state: "done" },
  { id: 3, title: "What is interest?", blurb: "Money that grows while it waits.", minutes: 3, state: "available",
    body: ["When you leave money in your wallet instead of spending it, Eddy adds a little extra. That extra is called interest.",
           "Mia leaves $40 in her wallet for a month. Eddy adds 2% — that's 80 cents. She didn't do anything. The waiting did the work.",
           "The longer money waits, the more it grows. That's why saving beats spending everything right away."] },
  { id: 4, title: "Borrowing and paying back", blurb: "A loan is a promise.", minutes: 4, state: "locked" },
  { id: 5, title: "Needs and wants", blurb: "Both are fine. They're different.", minutes: 3, state: "locked" },
  { id: 6, title: "Making a plan", blurb: "Pick a goal, then split your money.", minutes: 5, state: "locked" },
];

const LOAN = { reason: "Lego set", borrowed: 20, repaid: 12, dueLabel: "$2 every Sunday · 4 payments left", status: "on-track" };
const GOAL = { name: "Skateboard", target: 80, saved: 42.5 };

Object.assign(window, { CHILD, ACTIVITY, LESSONS, LOAN, GOAL });
