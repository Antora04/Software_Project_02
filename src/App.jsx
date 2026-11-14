import React from 'react';
import { GraduationCap, Moon, Sun } from 'lucide-react';
import { RoutineGeneratorView } from './components/RoutineGeneratorView';
import { LOCAL_ROUTINE_MANAGER } from './context/AuthContext';
import { useTheme } from './context/ThemeContext';

function ThemeButton() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
  return <button className="routine-only-theme" type="button" onClick={toggleTheme} aria-label={`Switch to ${nextTheme} theme`}>
    {resolvedTheme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
    <span>{nextTheme === 'dark' ? 'Dark mode' : 'Light mode'}</span>
  </button>;
}

export default function App() {
  return (
    <div className="routine-only-app">
      <header className="routine-only-header">
        <div className="routine-only-brand">
          <span className="routine-only-mark"><GraduationCap size={22} /></span>
          <div>
            <strong>CSE Routine Maker</strong>
            <span>Class, lab exam &amp; theory exam scheduling workspace</span>
          </div>
        </div>
        <ThemeButton />
      </header>
      <main className="routine-only-content">
        <RoutineGeneratorView user={LOCAL_ROUTINE_MANAGER} />
      </main>
    </div>
  );
}
