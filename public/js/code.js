let themeValue='monokai';

const socket = io()

let htmlEditor = ace.edit("editor1");

function setupEditor(){
    
    htmlEditor.setTheme(`ace/theme/${themeValue}`);
    htmlEditor.setOptions({
        autoScrollEditorIntoView: true,
        copyWithEmptySelection: true,
    });
    
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.setValue(`<!DOCTYPE html>
<html>
<head>
</head>
<body>
    <h1 id="demo">Heading</h1>
    <script>
        document.querySelector("#demo").addEventListener("click",()=>{
            alert("clicked at heading!")
        })
    </script>
</body>
</html>
    `)
}




const theme = document.querySelector("#viewoption")
theme.addEventListener('change',(e)=>{
    console.log(e.target.value)
    themeValue = e.target.value
    
    setupEditor()
})

setupEditor();

document.querySelector('#run-btn').addEventListener('click',()=>{
    let html = htmlEditor.getValue();
    let output = document.querySelector("#frame").contentWindow.document;
    output.open();
    output.write(html);
    output.close();
})


socket.on('message',(msg)=>{
    console.log(msg)
})

htmlEditor.on("change", function(){
    const val = htmlEditor.getValue()
    socket.emit("changed",val)
}) 

