// src/components/EditorialEditor.jsx
import React, { useRef, useEffect, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

const EditorialEditor = ({ onChange }) => {
  const editorRef = useRef(null);
  const [editorInstance, setEditorInstance] = useState(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const ejInstance = new EditorJS({
      holder: editorRef.current,
      placeholder: "Yahan apni story likho...",
      autofocus: true,
      /** Plugins/configuration **/
      tools: {
        header: {
          class: Header,
          inlineToolbar: true,
          config: {
            placeholder: "Title likho",
            levels: [2, 3, 4],
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
        },
        // Agar aur tools chahiye toh yahan add karo, e.g. image: { class: ImageTool, config: { ... } }
      },
      /**
       * Data load karna hai agar existing content hai:
       * data: props.initialData
       **/
      onReady: () => {
        setEditorInstance(ejInstance);
      },
      onChange: async () => {
        try {
          const outputData = await ejInstance.save();
          if (onChange) onChange(outputData);
        } catch (err) {
          console.error("Save error: ", err);
        }
      },
    });

    return () => {
      // ejInstance.destroy();
      setEditorInstance(null);
    };
  }, [editorRef, onChange]);

  return (
    <div className="">
      <div ref={editorRef} />
    </div>
  );
};

export default EditorialEditor;
