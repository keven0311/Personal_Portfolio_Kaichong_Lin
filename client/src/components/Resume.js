import React from "react";

const RESUME_DOWNLOAD_URL =
  "https://kaichonglin.com/files_for_download/KaichongLin_Resume.pdf";

export default function Resume() {
  const downloadResume = (url) => {
    const filename = "KaichongLin_Resume.pdf";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      <button
        variant="secondary"
        onClick={() => {
          downloadResume(RESUME_DOWNLOAD_URL);
        }}
      >
        Resume
      </button>
    </div>
  );
}
