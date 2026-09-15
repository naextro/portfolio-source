import React, { useState } from 'react';
import { useCMS } from '../CMSContext';

const SkillEditor = () => {
  const { content, addSkill, removeSkill } = useCMS();
  const [newSkill, setNewSkill] = useState({ imgSrc: '', label: '', desc: '' });

  const handleAdd = () => {
    if (newSkill.label && newSkill.desc) {
      addSkill({ ...newSkill, imgSrc: newSkill.imgSrc || 'images/default.svg' });
      setNewSkill({ imgSrc: '', label: '', desc: '' });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sky-400">Skills & Tools</h3>
      <div className="grid gap-2">
        {content.skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-2 p-2 bg-zinc-800 rounded-lg">
            <input
              type="text"
              value={skill.label}
              onChange={(e) => {
                const updated = [...content.skills];
                updated[index].label = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="Label"
            />
            <input
              type="text"
              value={skill.desc}
              onChange={(e) => {
                const updated = [...content.skills];
                updated[index].desc = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="Description"
            />
            <input
              type="text"
              value={skill.imgSrc}
              onChange={(e) => {
                const updated = [...content.skills];
                updated[index].imgSrc = e.target.value;
              }}
              className="text-field w-32 text-sm"
              placeholder="Image path"
            />
            <button
              onClick={() => removeSkill(index)}
              className="text-red-400 hover:text-red-300 text-sm px-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="p-3 bg-zinc-800 rounded-lg space-y-2">
        <h4 className="text-sm text-zinc-300">Add New Skill</h4>
        <input
          type="text"
          value={newSkill.label}
          onChange={(e) => setNewSkill({ ...newSkill, label: e.target.value })}
          placeholder="Label"
          className="text-field w-full text-sm"
        />
        <input
          type="text"
          value={newSkill.desc}
          onChange={(e) => setNewSkill({ ...newSkill, desc: e.target.value })}
          placeholder="Description"
          className="text-field w-full text-sm"
        />
        <input
          type="text"
          value={newSkill.imgSrc}
          onChange={(e) => setNewSkill({ ...newSkill, imgSrc: e.target.value })}
          placeholder="Image path"
          className="text-field w-full text-sm"
        />
        <button
          onClick={handleAdd}
          className="btn btn-primary text-sm w-full justify-center"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default SkillEditor;
