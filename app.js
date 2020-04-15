

var formulario = document.getElementById('formTask');

formulario.addEventListener('submit',saveTask);

//guardar las tareas

function saveTask(e){
  
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

  
    const task = {
        title,
        description
    };
   
    
    if (localStorage.getItem('tarea')===null) {
        let tarea = [];
        tarea.push(task);
        localStorage.setItem('tarea',JSON.stringify(tarea)); 
    } else{
        
        let tarea = JSON.parse(localStorage.getItem('tarea')); //obtener las tareas
        tarea.push(task);                                      //actualzar las tareas
        localStorage.setItem('tarea',JSON.stringify(tarea));   //alacenar las tareas
    }

    getTask();
    document.getElementById("formTask").reset();
    
    e.preventDefault();
}

//mostrar tareas en la interfaz:

function getTask() {

    
    let tarea = JSON.parse(localStorage.getItem('tarea'));

    let taskview = document.getElementById('tasks');
    taskview.innerHTML = "";

    for (let i = 0; i < tarea.length; i++) {
        console.log(tarea[i]);
        let titulo = tarea[i].title;
        let desc = tarea[i].description;
        console.log(titulo,desc);

        taskview.innerHTML += `<div class = "card">
                                    <div class = "card-body">
                                        <p>${titulo}-${desc}</p>
                                        <a class = "btn btn-danger" onclick = "deleteTask('${titulo}')">delete</a>
                                        
                                    </div>
                                </div>`
        
        
    }
    
}

getTask();

//eliminar tareas:

function deleteTask(titulo) {
    tarea = JSON.parse(localStorage.getItem('tarea'));
    for (let i = 0; i < tarea.length; i++) {
        if (tarea[i].title == titulo) {
            tarea.splice(i,1);
        }
        
        
    }
    localStorage.setItem('tarea',JSON.stringify(tarea));
    getTask();
}

getTask();