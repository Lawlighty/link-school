import dynamic from 'next/dynamic';
import BraftEditor, { EditorState } from 'braft-editor';
// import NoSSR from 'components/NoSSR';
const NOTSSR = dynamic({
    ssr: false, 
});
import React, { useState, useImperativeHandle, useEffect }  from 'react';


export default function Child({ cRef }) {
    // 此处注意useImperativeHandle方法的的第一个参数是目标元素的ref引用
    useImperativeHandle(cRef, () => ({
        // changeVal 就是暴露给父组件的方法
        submitContent: submitContent,
        getHtmlContent: () => {
            return editorState.toHTML();
        },
        clearEditorStatel: () => {
            setEditorStatel(BraftEditor.createEditorState(null));
        }
    }));

    const [editorState, setEditorStatel] = useState(
        BraftEditor.createEditorState(null),
    );
    const [val, setVal] = useState();
    useEffect(() => {
        // 假设此处从服务端获取html格式的编辑器内容
        // 使用BraftEditor.createEditorState将html字符串转换为编辑器需要的editorStat
        const htmlContent = '<div><b></b></div>';
        setEditorStatel(BraftEditor.createEditorState(htmlContent));
        ;
    }, []);

    const submitContent = async () => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = editorState.toHTML();
        console.log(htmlContent);
    };

    const handleEditorChange = (editorState: EditorState) => {
        setEditorStatel(editorState);
    };

    return (
        <div className="my-component">
            <BraftEditor
                value={editorState}
                onChange={handleEditorChange}
                onSave={submitContent}
            />
        </div>
    );
}
