import React, { useState } from 'react';
import { useCMS } from '../CMSContext';

const WorkEditor = () => {
  const { content, addWork, removeWork } = useCMS();
  const [newWork, setNewWork] = useState({ imgSrc: '', title: '', tags: '', projectLink: '' });

  const handleAdd = () => {
    if (newWork.title) {
      addWork({
        imgSrc: newWork.imgSrc || 'images/anon.png',
        title: newWork.title,
        tags: newWork.tags ? newWork.tags.split(',').map(t => t.trim()) : ['Development'],
        projectLink: newWork.projectLink || '#',
      });
      setNewWork({ imgSrc: '', title: '', tags: '', projectLink: '' });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sky-400">Portfolio Projects</h3>
      <div className="grid gap-2">
        {content.work.map((project, index) => (
          <div key={index} className="flex items-center gap-2 p-2 bg-zinc-800 rounded-lg">
            <input
              type="text"
              value={project.title}
              onChange={(e) => {
                const updated = [...content.work];
                updated[index].title = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="Project title"
            />
            <input
              type="text"
              value={project.projectLink}
              onChange={(e) => {
                const updated = [...content.work];
                updated[index].projectLink = e.target.value;
              }}
              className="text-field w-32 text-sm"
              placeholder="Link"
            />
            <button
              onClick={() => removeWork(index)}
              className="text-red-400 hover:text-red-300 text-sm px-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="p-3 bg-zinc-800 rounded-lg space-y-2">
        <h4 className="text-sm text-zinc-300">Add New Project</h4>
        <input
          type="text"
          value={newWork.title}
          onChange={(e) => setNewWork({ ...newWork, title: e.target.value })}
          placeholder="Project title"
          className="text-field w-full text-sm"
        />
        <input
          type="text"
          value={newWork.imgSrc}
          onChange={(e) => setNewWork({ ...newWork, imgSrc: e.target.value })}
          placeholder="Image path"
          className="text-field w-full text-sm"
        />
        <input
          type="text"
          value={newWork.tags}
          onChange={(e) => setNewWork({ ...newWork, tags: e.target.value })}
          placeholder="Tags (comma separated)"
          className="text-field w-full text-sm"
        />
        <input
          type="text"
          value={newWork.projectLink}
          onChange={(e) => setNewWork({ ...newWork, projectLink: e.target.value })}
          placeholder="Project link"
          className="text-field w-full text-sm"
        />
        <button
          onClick={handleAdd}
          className="btn btn-primary text-sm w-full justify-center"
        >
          Add Project
        </button>
      </div>
    </div>
  );
};

export default WorkEditor;
