import { useState } from 'react';
import type { ReactNode } from 'react';
import logo from '../../../assets/folio-logo.svg';

export function AppShell({ children }: { children: ReactNode }) {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="app-header">
        <img src={logo} alt="Folio" width="170" height="50" />
        <button
          className="navigation-toggle"
          type="button"
          aria-expanded={navigationOpen}
          aria-controls="workspace-navigation"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          {navigationOpen ? 'Close navigation' : 'Open navigation'}
        </button>
        <span className="development-label">Student workspace · Preview</span>
      </header>
      <aside className={`sidebar${navigationOpen ? ' is-open' : ''}`}>
        <nav id="workspace-navigation" aria-label="Workspace">
          <p className="eyebrow">Workspace</p>
          <a
            className="navigation-link"
            href="#main-content"
            aria-current="page"
            onClick={() => setNavigationOpen(false)}
          >
            Overview
          </a>
        </nav>
        <p className="sidebar-note">
          Built for students.
          <br />
          Open by design.
        </p>
      </aside>
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <footer className="app-footer">
        Folio is in development. Study tools are not available yet.
      </footer>
    </div>
  );
}
