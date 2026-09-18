# UI kit — Child Mode

Kid-facing side of Eddy Wallet at the 480px `--kid-max` column. Click-through: **role picker -> PIN (1234) -> wallet**, then four tabs.

| File | Screen |
| --- | --- |
| `Entry.jsx` | `RolePicker` ("Who's using Eddy?") and `PinUnlock` (shared-device child unlock) |
| `ChildHome.jsx` | Balance hero, savings goal, recent activity, next lesson |
| `ChildActivity.jsx` | Filterable kid-friendly transaction feed |
| `ChildLoans.jsx` | Read-only loan + repayment history, parent-only notice |
| `ChildLessons.jsx` | Lesson track, lesson reader, "I've read it" unlock |
| `app.jsx` | Shell: TopBar + TabBar + "Ask to spend" dialog |
| `data.js` | Fake family data |

Composed entirely from design-system components; no primitives are re-implemented here.

## Deliberate product calls (beyond the repo README)
- The child can **request** a spend rather than only reading history — a fully read-only child mode reads as surveillance. The request is inert until a parent approves, so parent control is unchanged. (Repo open question 2.)
- A **savings goal** on Home gives the balance a reason to exist. Not in the README — flag for review.
- Lateness is shown as status plus next step, never as a penalty (repo open question 1 is undecided).
