import React, { useState } from "react";
import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";

export default function Speakers({ theme, setTheme }) {
  const [showSessions, setShowSessions] = useState(true);
  return (
    <>
      <SpeakersToolbar
        theme={theme}
        setTheme={setTheme}
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
}
