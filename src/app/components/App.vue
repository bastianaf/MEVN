<template>
    <div>
            <nav class="navbar navbar-light bg-light">
                <a href="/" class="navbar-brand">Octopo</a>
            </nav>
            <div class="container">
                <div class="row pt-5">
                    <div class="col-md-5">
                        <div class="card">
                            <div class="card-body">
                            <form @submit.prevent="sendTask">
                                <div class="form-group">
                                    <input type="text" v-model="task.title" class="form-control" placeholder="Titulo">
                                </div>

                                <div class="form-group">
                                    <textarea  v-model="task.mensaje" cols="30" rows="10" class="form-control" placeholder="Mensaje..."></textarea>
                                </div>

                                <template v-if="edit === false">
                                    <button class="btn btn-primary btn-block">Enviar</button>
                                </template>
                                <template v-else>
                                    <button class="btn btn-success btn-block">Actualizar</button>
                                </template>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <table class="table table-bordered">
                            <thead>
                            <tr>
                                <th>Titulo</th>
                                <th>Mensaje</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr  v-for="task of tasks">
                                        <td> {{task.title}}</td>
                                        <td> {{task.mensaje}}</td>
                                        <td>
                                              <button @click="updateTask(task._id)" class="btn btn-secondary">Editar </button>
                                        </td>
                                        <td>
                                            <button @click="deleteTask(task._id)" class="btn btn-danger"> Eliminar </button>
                                        </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>

    class Task {
        constructor(title='', mensaje=''){
            this.title = title;
            this.mensaje = mensaje;
        }

    }

    export default{

        data(){
            return{
                task: new Task(),
                tasks: [],
                edit: false,
                taskToEdit: ''
            }
        },
        created(){
            this.getTasks()
        },
        methods: {
            sendTask(){
                if(this.edit === false){
                    fetch('/api/tasks', {
                        method: 'POST',
                        body: JSON.stringify(this.task),
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                        .then(res => res.json())
                        .then(data => {
                            this.getTasks();
                            this.task = new Task();
                        })
                }
                else{
                    fetch('/api/tasks/'+this.taskToEdit,{
                        method: 'PUT',
                        body: JSON.stringify(this.task),
                        headers: {
                            'Accept': 'application/json',
                            'Content-type': 'application/json'
                        }
                    })
                        .then(res=> res.json())
                        .then(data => {
                            this.getTasks();
                            this.edit = false;
                        })
                }

            },
            getTasks(){
                fetch('/api/tasks')
                    .then(res=> res.json())
                    .then(data => {
                        this.tasks = data;

                    });
            },
            deleteTask(id){
              fetch('/api/tasks/' + id, {
                  method: 'DELETE',
                  headers: {
                      'Accept': 'application/json',
                      'Content-type': 'application/json'
                  }
              })
                  .then(res => res.json())
                  .then(data=> this.getTasks());
            },
            updateTask(id){

                fetch('/api/tasks/' + id)
                    .then(res=> res.json())
                    .then(data => {
                        this.task = new Task(data.title, data.mensaje);
                        this.taskToEdit = data._id;
                        this.edit = true;
                    })
            }
        }
    }

</script>