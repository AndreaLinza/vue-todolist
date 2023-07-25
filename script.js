Vue.createApp({
    data() {
        return {
            //lastIdItem: 0,   //Se è vuota la lista
            lastIdItem:4,
            newTodoItem: {
                id: 'this.lastIdItem',
                text: "",
                done: ""
            },
            todoList: [
                {
                    id: 1,
                    text: "Fatti mandare dalla mamma a prendere il latte",
                    done: true
                },
                {
                    id: 2,
                    text: "Io a Napoli non ci sono mai stato, figuriamoci in moto",
                    done: false
                },
                {
                    id: 3,
                    text: "15 + 18 quanto fa?",
                    done: true
                },
                {
                    id: 4,
                    text: "La capra è il migliore animale che c'è...",
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
            //console.log(this.todoList)
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