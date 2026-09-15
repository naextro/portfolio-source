import React from 'react';
import { useCMS } from '../CMSContext';

const HeroEditor = () => {
  const { content, updateNestedContent } = useCMS();
  const hero = content.hero;

  const handleChange = (field, value) => {
    updateNestedContent('hero', field, value);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sky-400">Hero Section</h3>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Subtitle</label>
        <input
          type="text"
          value={hero.subtitle}
          onChange={(e) => handleChange('subtitle', e.target.value)}
          className="text-field w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Title</label>
        <textarea
          value={hero.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="text-field w-full min-h-[100px]"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Primary Button Label</label>
        <input
          type="text"
          value={hero.btnPrimary}
          onChange={(e) => handleChange('btnPrimary', e.target.value)}
          className="text-field w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Secondary Button Label</label>
        <input
          type="text"
          value={hero.btnSecondary}
          onChange={(e) => handleChange('btnSecondary', e.target.value)}
          className="text-field w-full"
        />
      </div>
    </div>
  );
};

export default HeroEditor;
