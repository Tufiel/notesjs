const addNote  =document.getElementById('addBtn');
const saveNote  =document.getElementById('saveBtn');
const addNoteInputs = document.getElementById('addNoteForm');
const main = document.getElementById('Main');
const cancel = document.getElementById('cancelBtn');
const deleteButtons = document.querySelectorAll('.deleteBtn');

addNote.addEventListener('click',()=>{
addNoteInputs.classList.remove('hidden');
Main.classList.add('hidden');

});

cancel.addEventListener('click',()=>{
	Main.classList.remove('hidden');
	addNoteInputs.classList.add('hidden');
});

saveNote.addEventListener('click',()=>{
	let title = document.getElementById('title').value;
	let noteText = document.getElementById('noteText').value;
	if(title == '' || noteText == '')
	 {
       showError();
	   return;
	 }
	 else
	 {
		let div = document.createElement('div');
		div.className = 'note';
		let t = document.createElement('h1');
		t.textContent = title;
		let b = document.createElement('p');
		b.textContent = noteText;
		let btn = document.createElement('button');
		btn.textContent='Delete';
		btn.className = 'hidden deleteBtn';
		btn.onclick = 'deleteNote(this)';

		div.appendChild(t);
		div.appendChild(b);
		div.appendChild(btn);
		Main.appendChild(div);
		Main.classList.remove('hidden');
	addNoteInputs.classList.add('hidden');
	saveNotes();
	 }
});

function showError()
{
	let e = document.querySelector('#addNoteForm b');
	e.classList.remove('hidden');
	setTimeout(()=>{e.classList.add('hidden')},2000);
}

function restoreNotes()
{
	let data = JSON.parse(localStorage.getItem('notes'));
	// console.log(data);
	if(data)
	for(let i =0 ;i<data.length;i++)
	{
		let t = data[i].Title;
		let c = data[i].Content;

		let div = document.createElement('div');
		div.className = 'note';
		let T = document.createElement('h1');
		T.textContent = t;
		let C = document.createElement('p');
		C.textContent = c;
		let btn = document.createElement('button');
		btn.textContent='Delete';
		btn.className = 'hidden deleteBtn';
		btn.onclick = 'deleteNote(this)';

		div.appendChild(T);
		div.appendChild(C);
		div.appendChild(btn);
		Main.appendChild(div);
		
	}
	
}
restoreNotes();

function saveNotes() 
{
	let data = [];
	const note = document.querySelectorAll('.note');
	
	for(let i = 0;i<note.length;i++)
	{
		let t = note[i].querySelector('h1').textContent;
		let c = note[i].querySelector('p').textContent;
		let obj = {
			Title:t,
			Content:c
		}
		data.push( obj );
	}
	
	console.log(data);
	localStorage.setItem('notes',JSON.stringify(data));
}

 function deleteNote(button){
        // Get the parent div element of the clicked button
        const parentDiv = button.closest('.note');
        console.log(`here`);
        // Remove the parent div element
        if (parentDiv) {
            parentDiv.remove();
        }
	}
  