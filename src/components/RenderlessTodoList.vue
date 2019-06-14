<script>
    export default {
        model:{
            prop:'value',
            event:'update'
        },
        props:{
            todos: {
                type: Array,
                required: true
            },
            value:{
                type:String,
                default:''
            }
        },
        data(){
            return{
                editing: false,
                editingIndex: null,
                editValue:''
            }
        },
        methods:{
            editInputEvent(i, value){
                this.editValue = value
            },
            saveEdit(){
                this.todos[this.editingIndex].text = this.editValue;
                this.editing = false;
                console.log(this.todos);
            },
            editClick(i){

                this.editing = true;
                this.editingIndex = i;
                this.editValue = this.todos[i].text
                this.$nextTick(()=>{
                    this.$parent.$refs[`input-edit${i}`][0].focus()
                })
            },
            deleteTodo(i){
                this.todos.splice(i,1);
            },
            clearInput(){
                this.$emit('update', '');
            },
            addTodo() {
                const todo = {
                    text:this.value,
                    state:'active'
                }
                if(this.value.length > 0) {
                    this.todos.push(todo);
                    this.clearInput();
                }

            }
        },
        render(){
            return this.$scopedSlots.default({
                todos: this.todos,
                addTodo:this.addTodo,
                deleteTodo:this.deleteTodo,
                editClick: this.editClick,
                editing:this.editing,
                editingIndex: this.editingIndex,
                editInputEvent:this.editInputEvent,
                saveEdit: this.saveEdit
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>