import React from 'react';
import { useCMS } from './CMSContext';
import HeroEditor from './editors/HeroEditor';
import AboutEditor from './editors/AboutEditor';
import SkillEditor from './editors/SkillEditor';
import WorkEditor from './editors/WorkEditor';
import ReviewEditor from './editors/ReviewEditor';
import ContactEditor from './editors/ContactEditor';
import FooterEditor from './editors/FooterEditor';

const sectionConfig = [
  { id: 'hero', label: 'Hero', icon: 'home' },
  { id: 'about', label: 'About', icon: 'person' },
  { id: 'skills', label: 'Skills', icon: 'code' },
  { id: 'work', label: 'Work', icon: 'folder' },
  { id: 'reviews', label: 'Reviews', icon: 'star' },
  { id: 'contact', label: 'Contact', icon: 'mail' },
  { id: 'footer', label: 'Footer', icon: 'public' },
];

const editorMap = {
  hero: HeroEditor,
  about: AboutEditor,
  skills: SkillEditor,
  work: WorkEditor,
  reviews: ReviewEditor,
  contact: ContactEditor,
  footer: FooterEditor,
};

const CMSLayout = () => {
  const { activeSection, setActiveSection, setIsCMSMode } = useCMS();
  const ActiveEditor = editorMap[activeSection];

  return (
    <div className="fixed inset-0 z-50 bg-zinc-900 flex">
      <aside className="w-64 bg-zinc-800 border-r border-zinc-700 flex flex-col h-full">
        <div className="p-4 border-b border-zinc-700">
          <h2 className="text-xl font-bold text-sky-400">⚙️ Naextro CMS</h2>
          <p className="text-xs text-zinc-500 mt-1">Interactive Content Editor</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {sectionConfig.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                activeSection === id
                  ? 'bg-sky-400/20 text-sky-400'
                  : 'text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
              }`}
            >
              <span className="material-symbols-rounded text-lg">{icon}</span>
              {label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-zinc-700">
          <button
            onClick={() => setIsCMSMode(false)}
            className="w-full btn btn-secondary justify-center text-sm"
          >
            ← Back to Preview
          </button>
        </div>
      </aside>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold capitalize text-zinc-100">
              {activeSection} Editor
            </h2>
            <span className="text-xs text-zinc-500 bg-zinc-800 px-3 py-1 rounded-full">
              Live Changes
            </span>
          </div>
          <div className="bg-zinc-800/50 rounded-2xl p-6 border border-zinc-700/50">
            <ActiveEditor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMSLayout;
