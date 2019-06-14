
<script>
    export default {
        inject:['handleClass'],
        mounted(){
            this.$el.classList.add(`${this.handleClass}`)
        },
        created(){

        },
        render(h){
            return this.$slots.default[0]
        }
    }
</script>
