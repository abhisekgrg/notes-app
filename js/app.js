const btn = document.getElementById('btn');
const container = document.getElementById('container');
function saveNote(){
    const notes = document.querySelectorAll('#textarea');
    const data = [];
    console.log(data.length)
    console.log("hi data")
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    console.log(data.length)
    console.log("hi data")
    if(data.length===0){

        console.log("hoaisdhfhoi")
        localStorage.removeItem("notes")

    }
    else{

        localStorage.setItem("notes",JSON.stringify(data));
    }


}
btn.addEventListener("click",function(){
    addNote()
})

/* <div class="block">
<div class="flex topbar">
<i class="fa-solid fa-floppy-disk" style="color:white"></i>
<i class="fa-solid fa-trash"  style="color:white"></i>
</div>
<textarea name="" id="textarea" style="width: 100%;height: 100%;border: none;"></textarea>
</div> */
const addNote = (text="") => {
    
    const note = document.createElement("div");
    note.classList.add("block");
    note.innerHTML = `
    <div class="flex topbar">
    <i class="save fa-solid fa-floppy-disk" style="color:white"></i>
    <i class="delete fa-solid fa-trash"  style="color:white"></i>
    </div>
    <textarea name="" id="textarea" style="width: 100%;height: 100%;border: none;">${text}</textarea>
    `;
    note.querySelector('.delete').addEventListener("click",function(){
        note.remove();
    })
    note.querySelector('.save').addEventListener("click",function(){
        saveNote();
    })
    container.appendChild(note)
}
function start(){
const lsNotes = JSON.parse(localStorage.getItem("notes"));
if(lsNotes ===null)
{
   
addNote()
}
else{

    lsNotes.forEach(
        (lsNote)=>{
            addNote(lsNote);
        }
        )
    }
}
start();