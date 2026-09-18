Child unlock keypad. Not a login — the parent owns the account; the PIN just switches modes.

```jsx
<PinPad value={pin} onChange={setPin} error={bad ? "That's not it. Try again!" : undefined} />
```

Keys are 72×64 sticker buttons. Dots fill left to right; errors stay encouraging.
