Inline Lucide glyph — the only icon source in Eddy Wallet; never hand-draw SVG or use emoji as an icon.

```jsx
<Icon name="piggy-bank" size={24} />
<Icon name="lock" size={16} color="var(--state-locked)" label="Parent only" />
```

Stroke-only at 2px. Use `size={16}` inline with body text, 20 for buttons/rows, 24 for nav, 28–40 for kid-facing feature tiles. 50 icons are bundled; `iconNames` lists them.
