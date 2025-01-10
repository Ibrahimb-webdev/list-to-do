document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('addTask');
    const taskList = document.getElementById('task-list');
    const searchInput = document.getElementById('search-input');
    const searchTaskBtn = document.getElementById('searchTask'); 

    // Fonction pour ajouter une tâche
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Veuillez entrer une tâche.');
            return;
        }

        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

        const listItem = document.createElement('li');
        listItem.setAttribute('data-task', taskText.toLowerCase()); // Ajout de l'attribut data-task

        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = `${taskText} (Ajouté le: ${formattedDate})`;
        listItem.appendChild(taskTextElement);

        const completeBtn = document.createElement('button');
        completeBtn.textContent = '✔';
        completeBtn.classList.add('task-btn');
        completeBtn.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Supprimer';
        deleteBtn.classList.add('task-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);

        taskList.appendChild(listItem);

        taskInput.value = ''; // Réinitialiser l'input
    }

    // Événements pour ajouter une tâche
    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Fonction pour rechercher une tâche
    function searchTask() {
        const searchText = searchInput.value.trim().toLowerCase();
        const tasks = taskList.getElementsByTagName('li');
        
        Array.from(tasks).forEach(task => {
            if (task.getAttribute('data-task').includes(searchText)) {
                task.style.display = '';
            } else {
                task.style.display = 'none';
            }
        });
    }

    // Événements pour rechercher une tâche
    searchTaskBtn.addEventListener('click', searchTask);

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchTask();
        }
    });
});

// Deuxième bloc de code pour ajouter des tâches avec des détails supplémentaires
document.getElementById('add-Task').addEventListener('click', function() {
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-Date').value;
    const category = document.getElementById('category').value;
    const priority = document.getElementById('priority').value;

    if (!taskName || !dueDate){
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    const taskItem = document.createElement('li');
    const taskNameElem = document.createElement('strong'); // Correction de l'erreur de typographie
    taskNameElem.textContent = taskName;

    taskItem.appendChild(taskNameElem);

    // Ajout d'autres éléments au besoin (date d'échéance, catégorie, priorité)

    const taskList = document.getElementById('task-list');
    taskList.appendChild(taskItem);
});
