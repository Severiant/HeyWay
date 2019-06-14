
<script>
import {Sortable} from '@shopify/draggable'
    export default {
        provide(){
            return {
                itemClass: this.itemClass,
                handleClass: this.handleClass
            }
        },
        mounted(){
            new Sortable(this.$el, {
                draggable: `.${this.itemClass}`,
                handle: `.${this.handleClass}`,
                mirror:{
                    constainDimensions:true
                }
            })
        },
        props:{
            handleClass:{default: 'handle'},
            itemClass:{default:'item'}
        },
        render(h){
            return h('div', {
                class: 'focus:outline-none'
            }, this.$slots.default)
        }
    }
</script>
