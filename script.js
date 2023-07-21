Vue.createApp({
    data() {
        return {
            newTodoItem: {
                id: 5,
                text: "",
                done: ""
            },
            todoList: [
                {
                    id:1,
                    text: "primo-task",
                    done: true
                },
                {
                    id:2,
                    text: "primo-task",
                    done: false
                },
                {
                    id:3,
                    text: "primo-task",
                    done: true
                },
                {
                    id:4,
                    text: "primo-task",
                    done: false
                    
                },
                
            ],
            
            lastIdItem: 5,
        }
    },
    
    methods: {
        clickTodoList() {
            const itemClone = { ...this.newTodoItem }
            this.todoList.push(itemClone)
            console.log(this.todoList)
            ++this.newTodoItem.id

            console.log(this.newTodoItem.id)
        },
        
        cancelItem(item){
            console.log(item)
        },

    

    }
}).mount("#app")