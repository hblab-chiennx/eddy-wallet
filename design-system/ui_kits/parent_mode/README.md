# UI kit — Parent Mode

Desktop-first parent side at `--page-max` 1120px: persistent sidebar, Sky-railed TopBar, soft-shadow cards. Click any sidebar item.

| File | Screen |
| --- | --- |
| `Sidebar.jsx` | Persistent nav + wallet summary + pending count |
| `ParentDashboard.jsx` | Balance hero, approval queue, stat tiles, ledger preview, loan, lesson progress |
| `ParentActivity.jsx` | Full ledger with search, range and type filters |
| `AllowanceRules.jsx` | `AllowanceRules` + `ParentLoans` (rules, controls, new loan) |
| `ParentActions.jsx` | Parent-only actions: approval queue, deposit/withdraw dialogs, account controls |
| `FamilySetup.jsx` | 4-step first-run flow (account, child, PIN, first rules) |
| `app.jsx` | Shell + read-only `ParentLessons` monitor view |
| `data.js` | Fake family ledger |

## Notes
- Parent Mode never bounces and never uses the Sunbeam accent for actions — the visual register is calmer than Child Mode on purpose.
- Screens carry `Undecided` badges where the repo README lists an open product question (late repayment, PIN reset, second child/guardian) rather than inventing an answer.
- Approve/decline both explain what the child will see. Transparency is the parent-facing promise.
