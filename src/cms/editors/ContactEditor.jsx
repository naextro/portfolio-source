import React from 'react';
import { useCMS } from '../CMSContext';

const ContactEditor = () => {
  const { content, updateNestedContent } = useCMS();
  const contact = content.contact;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sky-400">Contact Section</h3>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Heading</label>
        <input
          type="text"
          value={contact.heading}
          onChange={(e) => updateNestedContent('contact', 'heading', e.target.value)}
          className="text-field w-full"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Subtext</label>
        <textarea
          value={contact.subtext}
          onChange={(e) => updateNestedContent('contact', 'subtext', e.target.value)}
          className="text-field w-full min-h-[80px]"
        />
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Social Links</label>
        {contact.socials.map((social, index) => (
          <div key={index} className="flex gap-2 mb-2 items-center">
            <input
              type="text"
              value={social.href}
              onChange={(e) => {
                const updated = [...contact.socials];
                updated[index].href = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="URL"
            />
            <input
              type="text"
              value={social.label}
              onChange={(e) => {
                const updated = [...contact.socials];
                updated[index].label = e.target.value;
              }}
              className="text-field w-24 text-sm"
              placeholder="Label"
            />
          </div>
        ))}
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Footer Sitemap</label>
        {contact.sitemap.map((item, index) => (
          <div key={index} className="flex gap-2 mb-2 items-center">
            <input
              type="text"
              value={item.label}
              onChange={(e) => {
                const updated = [...contact.sitemap];
                updated[index].label = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="Label"
            />
            <input
              type="text"
              value={item.href}
              onChange={(e) => {
                const updated = [...contact.sitemap];
                updated[index].href = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="Link"
            />
          </div>
        ))}
      </div>
      <div>
        <label className="block text-sm text-zinc-400 mb-1">Footer Socials</label>
        {contact.footerSocials.map((social, index) => (
          <div key={index} className="flex gap-2 mb-2 items-center">
            <input
              type="text"
              value={social.label}
              onChange={(e) => {
                const updated = [...contact.footerSocials];
                updated[index].label = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="Label"
            />
            <input
              type="text"
              value={social.href}
              onChange={(e) => {
                const updated = [...contact.footerSocials];
                updated[index].href = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="URL"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactEditor;
