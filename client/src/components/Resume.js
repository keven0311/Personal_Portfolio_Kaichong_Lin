import React from "react";
import { useNavigate } from "react-router-dom";

const RESUME_DOWNLOAD_URL =
  "https://kaichonglin.com/files_for_download/KaichongLin_Resume.pdf";

export default function Resume() {
  const navigate = useNavigate();

  const downloadResume = (url) => {
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
      setTimeout(() => {
        navigate('/home');
      },1000)
    } else {
      alert("Failed to open a new tab. Please disable your popup blocker.");
    }
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
