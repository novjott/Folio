import { AppShell } from '../components/layout/AppShell';

export function App() {
  return (
    <AppShell>
      <section aria-labelledby="welcome-title" className="welcome">
        <p className="eyebrow">Your school notes, your way.</p>
        <h1 id="welcome-title">A little space for your next big idea.</h1>
        <p>
          Welcome to Folio, your future workspace for studying. We’re laying the
          foundations for notes, sketches and coursework in one place.
        </p>
        <p className="notice">Project foundation · In development</p>
      </section>
      <section aria-labelledby="planned-title">
        <h2 id="planned-title">Coming to your workspace</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <span className="eyebrow">Planned</span>
            <h3>Notes & ideas</h3>
            <p>A home for lecture notes, organised around the way you learn.</p>
          </article>
          <article className="feature-card">
            <span className="eyebrow">Planned</span>
            <h3>Handwriting & sketches</h3>
            <p>
              Room to work things out with text, diagrams and freehand drawing.
            </p>
          </article>
          <article className="feature-card">
            <span className="eyebrow">Planned</span>
            <h3>Assignments & deadlines</h3>
            <p>A clearer view of coursework and what’s coming next.</p>
          </article>
        </div>
      </section>
    </AppShell>
  );
}
