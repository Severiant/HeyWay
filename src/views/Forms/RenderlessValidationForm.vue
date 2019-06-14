<script>
    export default {
        props:{
            fields:{
                type:Array,
                default:()=>([])
            }
        },
        data(){
            return{
                errors:[],
            }
        },
        render(){
            return this.$scopedSlots.default({
                errors:this.errors
            })
        }
    }
</script>
