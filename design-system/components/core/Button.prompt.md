The pressable control — use for every action; never style a bare `<button>`.

```jsx
<Button variant="primary" size="lg" icon="piggy-bank" fullWidth>Save it</Button>
<Button variant="secondary" size="sm" iconRight="chevron-right">See all</Button>
<Button variant="danger" icon="minus">Withdraw</Button>
```

One `primary` per screen. `accent` (Sunbeam yellow) is reserved for happy money moments in Child Mode. `danger` only for parent-only irreversible actions and always behind a Dialog confirm.
