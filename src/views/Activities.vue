<template>
  <renderless-todo-list :value="input" @update="(e)=>input = e" :todos="todos">
    <div
      slot-scope="{ todos:mytodos, addTodo, deleteTodo, editClick, editing, editingIndex, editInputEvent, saveEdit}"
    >
      <sortable-list class="font-monteserrat bg-white-300 list">
        <sortable-item
          v-for="(todo,i) in mytodos"
          :class="{disabled:i != editingIndex && editing }"
          :key="i"
          class="shadow-md mb-4 py-2 rounded-lg hover:bg-gray-300 border border-red flex flex-row items-center"
        >
          <sortable-handle class="mr-2">
            <div class="w-full bg-white-900">
              <input
                @keypress.enter.prevent="saveEdit"
                :ref="'input-edit' + i"
                @input="editInputEvent(i, $event.target.value)"
                v-show="editing && i === editingIndex"
                class="m-3"
                type="text"
                name="editTodo"
                id="editTodoId"
                :value="todo.text"
              >
              <button
                v-show="editing && i === editingIndex"
                @click="saveEdit"
                class="btn-green"
              >Save</button>
              <p
                @click="editClick(i)"
                v-show="i !== editingIndex || !editing"
                class="m-3 font-sans"
              >{{todo.text}}</p>
              <div :class="{disabled:editing}" class="controls ml-auto">
                <button
                  :disabled="editing"
                  @click="editClick(i)"
                  type="button"
                  class="focus:outline-none px-4 py-2 bg-yellow-500 rounded-lg text-mycolor mr-2"
                >Edit</button>
                <button
                  :disabled="editing"
                  @click="deleteTodo(i)"
                  type="button"
                  class="btn-red mr-2"
                >Delete</button>
              </div>

              <!-- <img src="../assets/icons/sort.svg" width="32px" height="32px" alt="image description"> -->
            </div>
          </sortable-handle>
        </sortable-item>
        <div
          :class="{disabled:editing}"
          class="add-controls inline-block bg-gray-400 w-auto flex flex-row p-2"
        >
          <input
            :disabled="editing"
            v-model="input"
            class="input-add rounded-lg ml-2 text-xl focus:outline-none"
            type="text"
            name="newtodo"
            id="newTodoId"
            placeholder="add new todo..."
          >
          <button
            :disabled="editing"
            @click="addTodo"
            class="focus:outline-none ml-2 bg-green-500 px-4 py-2 rounded-lg"
          >Add</button>
        </div>
      </sortable-list>
    </div>
  </renderless-todo-list>
</template>

<script>
import RenderlessTodoList from "../components/RenderlessTodoList.vue";
import SortableList from "../components/SortableList.vue";
import SortableItem from "../components/SortableItem.vue";
import SortableHandle from "../components/SortableHandle.vue";
export default {
  name: "Activities",
  components: {
    RenderlessTodoList,
    SortableList,
    SortableItem,
    SortableHandle
  },
  data() {
    return {
      input: "",
      todos: [
        { text: "Make a todo list", state: "active" },
        { text: "Cook a pie", state: "active" },
        { text: "Make a dinner", state: "active" },
        { text: "Write some code...", state: "active" }
      ]
    };
  }
};
</script>

<style scoped>
.input-add {
  text-indent: 1em;
}
.btn-green {
  @apply bg-green-700 text-white font-bold py-1 px-2 rounded;
}
.btn-green:hover {
  @apply bg-green-800;
}
.btn-red {
  @apply bg-red-700 text-white font-bold py-2 px-4 rounded;
}
.btn-red:hover {
  @apply bg-red-800;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.disabled {
  @apply opacity-50;
}
.disabled {
  cursor: auto;
}
.disabled > button {
  cursor: auto;
}
</style>