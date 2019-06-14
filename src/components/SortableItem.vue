
<script>
    export default {
        inject:['itemClass'],

        mounted(){
            this.$el.classList.add('focus:outline-none')
            this.$el.classList.add(`${this.itemClass}`)
        },
        render(h){
            return this.$slots.default[0]
        }
    }
</script>
