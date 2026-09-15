import React from 'react';
import { useCMS } from '../CMSContext';

const AboutEditor = () => {
  const { content, updateNestedContent, updateStat } = useCMS();
  const about = content.about;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sky-400">About Section</h3>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Name</label>
        <input
          type="text"
          value={about.name}
          onChange={(e) => updateNestedContent('about', 'name', e.target.value)}
          className="text-field w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Description</label>
        <textarea
          value={about.description}
          onChange={(e) => updateNestedContent('about', 'description', e.target.value)}
          className="text-field w-full min-h-[200px]"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Stats</label>
        {about.stats.map((stat, index) => (
          <div key={index} className="flex gap-2 mb-2 items-center">
            <input
              type="text"
              value={stat.label}
              onChange={(e) => updateStat(index, 'label', e.target.value)}
              placeholder="Label"
              className="text-field flex-1"
            />
            <input
              type="number"
              value={stat.number}
              onChange={(e) => updateStat(index, 'number', parseInt(e.target.value) || 0)}
              className="text-field w-20"
            />
          </div>
        ))}
        <button
          onClick={() => updateNestedContent('about', 'stats', [...about.stats, { label: 'New Stat', number: 0 }])}
          className="text-sm text-sky-400 hover:underline mt-1"
        >
          + Add Stat
        </button>
      </div>
    </div>
  );
};

export default AboutEditor;
