"use client";

import "@google/model-viewer";

export default function MallViewer() {
  return (
    <div className="viewer-card">
      <model-viewer
        src="/models/source_urban199_usdz.glb"
        alt="3D shopping mall model"
        auto-rotate
        camera-controls
        shadow-intensity="1"
        exposure="1"
        ar
      />
    </div>
  );
}
