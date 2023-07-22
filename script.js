Vue.createApp({
    data() {
        return {
            //lastIdItem: 0,   Se è vuota la lista
            lastIdItem:4,
            newTodoItem: {
                id: this.lastIdItem,
                text: "",
                done: ""
            },
            todoList: [
                {
                    id: 1,
                    text: "primo-task",
                    done: true
                },
                {
                    id: 2,
                    text: "secondo-task",
                    done: false
                },
                {
                    id: 3,
                    text: "terzo-task",
                    done: true
                },
                {
                    id: 4,
                    text: "quarto-task",
                    done: false

                },

            ],

            
        }
    },

    methods: {
        clickTodoList() {
            const itemClone = { ...this.newTodoItem, 
                id: ++this.lastIdItem,
            }
            //console.log(this.todoList.id, itemClone)
            
            
            this.todoList.push(itemClone)
            console.log(this.todoList)
    },
    
    lineThrough(todo){

        if(todo.done === true){
            todo.done = false
        }else{
            todo.done = true
        }
        
    },

    cancelItem(itemID) {

        let indexItemDelete = this.todoList.findIndex((todoItem) => todoItem.id === itemID)
        
        //Versione forEach

        // let indexItemDelete;

        // this.todoList.forEach((todoItem, i) => {
        //     const todoItems = this.todoList[i]

        //     if(todoItems.id === itemID){
        //         indexItemDelete = i
        //     }
        // });
        this.todoList.splice(indexItemDelete, 1)
        console.log(indexItemDelete)
    },



}
}).mount("#app")