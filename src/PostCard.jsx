import React, { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div
        onClick={() => setClicked(!clicked)}
        className={`${
          clicked ? "bg-blue-100" : "bg-white"
        } p-6 rounded-lg shadow cursor-pointer transition-colors duration-200 border border-gray-100 hover:shadow-md`}
      >
        <h2 className="text-base font-bold text-gray-800 mb-3">
          {title}
        </h2>

        <p className="text-xs text-gray-500 leading-relaxed">
          {body}
        </p>
      </div>
    </>
  );
}

export default PostCard;