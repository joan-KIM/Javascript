import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

function main(){
    const todoList = new TodoList();
    rl.question('명령어를 입력하세요.   ', callback);

    function callback(command){
        if(command == '목록'){
            todoList.print();
        }else if(command == '종료'){
            rl.close();
            return
        }else{
            const [order, title] = command.split(',');
            switch(order){
                case '추가':
                    todoList.addTodo(title);
                    break;
                case '완료':
                    todoList.completeTodo(title);
                    break;
                case '삭제':
                    todoList.deleteTodo(title);
                    break;
            }
        }
        
        rl.question('명령어를 입력하세요.   ', callback);
    }
}


main();


function Todo(title){
    this.title = title;
    this.status = '미완료';

    this.complete = function() {
        this.status = '완료';
    }
}

function TodoList(){
    this.todos = [];

    this.addTodo = function(title) {
        this.todos.push(new Todo(title));
    }
    this.print = function(){
        this.todos.forEach(function(todo){
            console.log(todo.title, todo.status);
        })
    }
    this.completeTodo = function(title){
        const todo = this.findTodo(title);
        todo.complete();
    }   
    this.findTodo = function(title){
        let todo;
        for(let i=0; i < this.todos.length; i++){
            if(this.todos[i].title == title){
                todo = this.todos[i];
            }
        }
        return todo;
    }
    this.findTodoIndex = function(title){
        let todoIndex;
        this.todos.forEach(function(todo, index){
            if(todo.title == title){
                todoIndex = index;
            }
        });
        return todoIndex;
    }
    this.deleteTodo = function(title){
        const todoIndex = this.findTodoIndex(title);
        this.todos.splice(todoIndex, 1);
    }

}