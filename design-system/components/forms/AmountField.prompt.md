Money entry at money scale — mono, tabular, fixed "$" prefix.

```jsx
<AmountField label="How much?" value={amt} onChange={e => setAmt(e.target.value)} max={42.5} />
```

Use anywhere a parent types an amount. Never use a plain Input for dollars.
