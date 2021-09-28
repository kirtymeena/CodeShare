let themeValue='twilight';
let htmlEditor = ace.edit("col1");
let jsEditor = ace.edit("col2");
let cssEditor = ace.edit("col3")

//html editor
function setupEditor(){
    
    htmlEditor.setTheme(`ace/theme/${themeValue}`);
    htmlEditor.setOptions({
        autoScrollEditorIntoView: true,
        copyWithEmptySelection: true,
        enableSnippets: true,
        enableBasicAutoCompletion: true,
        enableLiveAutoCompletion: true
    });
    
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.setValue(`<!DOCTYPE html>`)
}
setupEditor();

//javascript editor
function setupEditor2(){
    
    jsEditor.setTheme(`ace/theme/${themeValue}`);
    jsEditor.setOptions({
        autoScrollEditorIntoView: true,
        copyWithEmptySelection: true,
        enableSnippets: true,
        enableBasicAutoCompletion: true,
        enableLiveAutoCompletion: true
    });
    
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setValue(`//javascript`)
}


setupEditor2();

//css editor
function setupEditor3(){
    
    cssEditor.setTheme(`ace/theme/${themeValue}`);
    cssEditor.setOptions({
        autoScrollEditorIntoView: true,
        copyWithEmptySelection: true,
        enableSnippets: true,
        enableBasicAutoCompletion: true,
        enableLiveAutoCompletion: true
    });
    
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.setValue(`/* css */
body{
    color:white
}
    `)
}


setupEditor3();

document.querySelector('#run-btn').addEventListener('click',()=>{
    let html = htmlEditor.getValue();
    let js = jsEditor.getValue();
    let css = cssEditor.getValue();

    let jsCode = "<script>"+js+"</script>"
    let cssCode = "<style>"+css+"</style>"
    let output = document.querySelector("#frame").contentWindow.document;

    output.open();
    output.write(html+jsCode+cssCode);
    output.close();
})

document.getElementById("clear").addEventListener("click",(e)=>{
    setupEditor()
    setupEditor2()
    setupEditor3()
})


