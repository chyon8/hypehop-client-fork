import React, { useState, useRef, useEffect } from 'react';

function EditorBox({ /* onContentChange, */ value }) {
  const editorRef = useRef();
  const [, setContent] = useState('');
  // const [body, setBody]=useState('')

  // const handleChange = () => {
  //   const data = editorRef.current.getInstance().getHTML();
  //   setContent(data);
  //   onContentChange(data);
  // };
  useEffect(() => {
    if (value) {
      setContent(value);
    }
  }, [value]);

  useEffect(() => {
    const editorContainer = editorRef.current.getInstance().options.el;
    editorContainer.style.textAlign = 'left';
  }, []);

  // const customToolbar = [
  //   ['heading', 'bold', 'italic', 'strike'],
  //   ['hr', 'quote'],
  //   ['ul', 'ol', 'indent', 'outdent'],
  //   ['scrollSync'],
  // ];

  return (
    <div>
      {/* <Editor
        initialValue={" "}
        //initialValue={value? value :' ' }
        // initialValue={content}
        previewStyle="vertical"
        height="500px"
        initialEditType="wysiwyg"
        onChange={handleChange}
        ref={editorRef}
        toolbarItems={customToolbar}
      /> */}
    </div>
  );
}

export default EditorBox;
