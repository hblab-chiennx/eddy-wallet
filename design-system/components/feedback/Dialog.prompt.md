Modal confirm or short parent form. Renders `position:absolute` inside the nearest positioned ancestor so it works inside device frames.

```jsx
<Dialog open={open} title="Withdraw $5.00?" icon="minus" tone="danger" parentOnly
  description="Mia's balance goes from $42.50 to $37.50. She'll see it in her activity."
  confirmLabel="Withdraw" onConfirm={...} onClose={...} />
```

Every irreversible parent action goes through one.
