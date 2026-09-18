const { LessonCard, Card, Button, ProgressBar, Toast, Icon, Badge } = window.EddyWalletDesignSystem_7e6d2a;

function ChildLessons() {
  const [open, setOpen] = React.useState(null);
  const [doneIds, setDoneIds] = React.useState([1, 2]);
  const [toast, setToast] = React.useState(false);
  const lessons = LESSONS.map(l => ({ ...l, state: doneIds.includes(l.id) ? "done" : (l.state === "locked" && doneIds.includes(l.id - 1) ? "available" : l.state) }));
  const lesson = open ? lessons.find(l => l.id === open) : null;

  if (lesson) {
    return (
      <div style={{ display: "grid", gap: "var(--space-5)", paddingTop: "var(--space-2)" }}>
        <Button variant="ghost" icon="chevron-left" onClick={() => setOpen(null)} style={{ justifySelf: "start" }}>All lessons</Button>
        <Card sticker radius="var(--radius-xl)" tone="brand">
          <Badge tone="grape" icon="lightbulb">{"Lesson " + String(lesson.id).padStart(2, "0")}</Badge>
          <h1 style={{ marginTop: "var(--space-3)", fontSize: "var(--text-h1)" }}>{lesson.title}</h1>
          <p style={{ marginTop: 4, marginBottom: 0, color: "var(--teal-800)", fontWeight: 600 }}>{lesson.blurb}</p>
        </Card>
        {(lesson.body || ["This lesson is still being written."]).map((p, i) => (
          <p key={i} style={{ fontSize: "var(--text-body-lg)", lineHeight: "var(--lh-body-lg)", margin: 0 }}>{p}</p>
        ))}
        <Card tone="sunken" padding="var(--space-4)">
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <Icon name="coins" size={24} color="var(--sun-700)" />
            <div style={{ fontSize: "var(--text-sm)", color: "var(--text-body)" }}>
              <strong>Try it:</strong> leave $10 in your wallet all month and check back. Eddy will add 20 cents.
            </div>
          </div>
        </Card>
        <Button variant="primary" size="lg" icon="check" fullWidth
          onClick={() => { setDoneIds(d => d.includes(lesson.id) ? d : [...d, lesson.id]); setToast(true); setOpen(null); setTimeout(() => setToast(false), 2600); }}>
          I've read it
        </Button>
      </div>
    );
  }

  return (
    <div style={{ display: "grid", gap: "var(--space-4)", paddingTop: "var(--space-2)" }}>
      {toast ? <Toast celebrate message="Lesson done!" detail="The next one just unlocked." /> : null}
      <Card padding="var(--space-4)">
        <ProgressBar tone="grape" label="Your learning track" value={doneIds.length} max={LESSONS.length} valueLabel={doneIds.length + " of " + LESSONS.length} />
      </Card>
      {lessons.map((l, i) => (
        <LessonCard key={l.id} index={i + 1} {...l} onClick={() => setOpen(l.id)} />
      ))}
    </div>
  );
}
window.ChildLessons = ChildLessons;
