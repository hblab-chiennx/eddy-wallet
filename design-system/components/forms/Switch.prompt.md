On/off setting that applies immediately (no Save button).

```jsx
<Switch label="Require approval to spend" parentOnly checked={on} onChange={...} />
```

Set `parentOnly` on anything a child can see but not change.
