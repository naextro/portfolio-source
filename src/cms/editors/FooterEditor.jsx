import React from 'react';
import { useCMS } from '../CMSContext';

const FooterEditor = () => {
  const { content, updateNestedContent } = useCMS();
  const footer = content.footer;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sky-400">Footer Section</h3>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Heading</label>
        <input
          type="text"
          value={footer.heading}
          onChange={(e) => updateNestedContent('footer', 'heading', e.target.value)}
          className="text-field w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Button Label</label>
        <input
          type="text"
          value={footer.btnLabel}
          onChange={(e) => updateNestedContent('footer', 'btnLabel', e.target.value)}
          className="text-field w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Email</label>
        <input
          type="text"
          value={footer.btnEmail}
          onChange={(e) => updateNestedContent('footer', 'btnEmail', e.target.value)}
          className="text-field w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Copyright</label>
        <input
          type="text"
          value={footer.copyright}
          onChange={(e) => updateNestedContent('footer', 'copyright', e.target.value)}
          className="text-field w-full"
        />
      </div>
    </div>
  );
};

export default FooterEditor;
