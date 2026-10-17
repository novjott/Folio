import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('application foundation', () => {
  it('provides the workspace landmarks and an honest development status', () => {
    render(<App />);
    expect(screen.getByRole('main')).toHaveAttribute('id', 'main-content');
    expect(
      screen.getByRole('navigation', { name: 'Workspace' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Skip to content' }),
    ).toHaveAttribute('href', '#main-content');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'A little space',
    );
    expect(screen.getAllByText('Planned')).toHaveLength(3);
    expect(screen.getByRole('contentinfo')).toHaveTextContent(
      'Study tools are not available yet',
    );
  });

  it('opens and closes navigation, including after selecting the overview', async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Open navigation' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAccessibleName('Close navigation');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    await user.click(toggle);
    await user.click(screen.getByRole('link', { name: 'Overview' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
