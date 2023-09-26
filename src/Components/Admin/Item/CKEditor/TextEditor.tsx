import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { uploadImage } from "../../../Item/Handle";

const TextEditor = ({ initialValue, onChange }: any) => {
  const [editorData, setEditorData] = useState(initialValue);

  useEffect(() => {
    setEditorData(initialValue);
  }, [initialValue]);

  const handleEditorChange = (event: any, editor: any) => {
    const data = editor.getData();
    setEditorData(data);
    onChange(data);
  };
  function uploadAdapter(loader: any) {
    return {
      upload: () => {
        return loader.file
          .then((file: any) => {
            return uploadImage(file, "editor")
              .then((uploadedFileUrl: any) => {
                return {
                  default: uploadedFileUrl,
                };
              })
              .catch((error: any) => {
                console.error("Lỗi khi xử lý kết quả tải lên:", error);
                throw error;
              });
          })
          .catch((error: any) => {
            console.error("Lỗi tải lên tệp tin:", error);
            throw error;
          });
      },
    };
  }

  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        config={{ extraPlugins: [uploadPlugin] }}
        data={editorData}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default TextEditor;
