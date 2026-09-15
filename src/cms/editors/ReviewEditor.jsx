import React, { useState } from 'react';
import { useCMS } from '../CMSContext';

const ReviewEditor = () => {
  const { content, addReview, removeReview } = useCMS();
  const [newReview, setNewReview] = useState({ content: '', name: '', imgSrc: '', company: '' });

  const handleAdd = () => {
    if (newReview.name && newReview.content) {
      addReview({
        ...newReview,
        imgSrc: newReview.imgSrc || 'images/default.jpg',
      });
      setNewReview({ content: '', name: '', imgSrc: '', company: '' });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-sky-400">Client Reviews</h3>
      <div className="grid gap-2">
        {content.reviews.map((review, index) => (
          <div key={index} className="flex items-center gap-2 p-2 bg-zinc-800 rounded-lg">
            <input
              type="text"
              value={review.content}
              onChange={(e) => {
                const updated = [...content.reviews];
                updated[index].content = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="Review text"
            />
            <input
              type="text"
              value={review.name}
              onChange={(e) => {
                const updated = [...content.reviews];
                updated[index].name = e.target.value;
              }}
              className="text-field flex-1 text-sm"
              placeholder="Name"
            />
            <input
              type="text"
              value={review.company}
              onChange={(e) => {
                const updated = [...content.reviews];
                updated[index].company = e.target.value;
              }}
              className="text-field w-28 text-sm"
              placeholder="Company"
            />
            <button
              onClick={() => removeReview(index)}
              className="text-red-400 hover:text-red-300 text-sm px-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="p-3 bg-zinc-800 rounded-lg space-y-2">
        <h4 className="text-sm text-zinc-300">Add New Review</h4>
        <textarea
          value={newReview.content}
          onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
          placeholder="Review content"
          className="text-field w-full text-sm min-h-[60px]"
        />
        <input
          type="text"
          value={newReview.name}
          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
          placeholder="Name"
          className="text-field w-full text-sm"
        />
        <input
          type="text"
          value={newReview.imgSrc}
          onChange={(e) => setNewReview({ ...newReview, imgSrc: e.target.value })}
          placeholder="Image path"
          className="text-field w-full text-sm"
        />
        <input
          type="text"
          value={newReview.company}
          onChange={(e) => setNewReview({ ...newReview, company: e.target.value })}
          placeholder="Company"
          className="text-field w-full text-sm"
        />
        <button
          onClick={handleAdd}
          className="btn btn-primary text-sm w-full justify-center"
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default ReviewEditor;
