const input = document.getElementById('taskInput'),
      add = document.getElementById('addBtn'),
      list = document.getElementById('list');

add.addEventListener('click', () => {
  let t = input.value.trim();
  if (!t) return;

  

  let li = document.createElement('li');



  let taskText = document.createElement('span');
  taskText.textContent = t;
  taskText.className = 'task-text';



  let btns = document.createElement('div');
  btns.className = 'buttons';




  let edit = document.createElement('button');
  edit.textContent = 'Edit';
  edit.className = 'edit';
  edit.addEventListener('click', e => {
    e.stopPropagation();
    let newT = prompt('Edit task:', taskText.textContent);
    if (newT != null && newT.trim()) taskText.textContent = newT.trim();
  });




  let doneBtn = document.createElement('button');
  doneBtn.textContent = 'Done';
  doneBtn.className = 'done';
  doneBtn.addEventListener('click', e => {
    e.stopPropagation();
    li.remove();
  });

  btns.append(edit, doneBtn);
  li.append(taskText, btns);
  list.appendChild(li);
  input.value = '';
});
