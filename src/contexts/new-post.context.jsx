import { createContext, useState } from "react";

export const NewPostContext = createContext({
  title: null,
  setTitle: () => null,
  content: null,
  setContent: () => null,
  files: [],
  setFiles: () => null,
  croppedFiles: [],
  setCroppedFiles: () => null,
});

export const NewPostProvider = ({ children }) => {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [files, setFiles] = useState([]);
  const [croppedFiles, setCroppedFiles] = useState([]);
  const value = {
    files,
    setFiles,
    title,
    setTitle,
    content,
    setContent,
    croppedFiles,
    setCroppedFiles,
  };

  return (
    <NewPostContext.Provider value={value}>{children}</NewPostContext.Provider>
  );
};
