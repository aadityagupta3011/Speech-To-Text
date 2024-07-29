import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {useCopyToClipboard} from "react-use";

const App = () => {
  const [isCopied, copyToClipboard] = useCopyToClipboard();
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  };
  const stopListening = () => {
    SpeechRecognition.stopListening();
  };
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen border-2">
        <div className="text-5xl font-bold mb-20">
          Speech To Text Container
        </div>

        <div className="w-[50vw] h-[50vh] bg-green-300 shadow-lg p-4 mb-10">
          {transcript}
        </div>

        <div className="flex space-x-5">
          <button
            onClick={() => copyToClipboard(transcript)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Copy to clipboard
          </button>
          <button
            onClick={startListening}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Start Listening
          </button>
          <button
            onClick={stopListening}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
