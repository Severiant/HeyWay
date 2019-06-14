<script>
export default {
    model:{
        prop:'comments',
        event:'update'
    },
  props: {
    comments: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      input: "",
      answerValue: "",
      bindClearValue:""
    };
  },
  methods: {
    addComment() {
      if (this.input.length > 0) {
        this.$emit('update',[{text:this.input, answers:[]},...this.comments])
        this.clearInput();
      }
    },
    clearInput(){
        this.input = ''
    },
    clearAnswer(){
        this.answerValue = ''
        this.bindClearValue = ''
    },
    answerComment(id) {
        if(this.answerValue.length === 0){
            return
        }
      this.comments[id].answers.push(this.answerValue);
      this.$emit('update',this.comments)
      this.clearAnswer()
    },
    deleteComment(id) {
      this.comments.splice(id, 1);
    },
    onAnswerInput(e){
        this.answerValue = e.target.value;
    },

  },
  render() {
    return this.$scopedSlots.default({
      comments: this.comments,
      bindClearValue:this.bindClearValue,
      inputValue: this.input,
      addComment: this.addComment,
      answerComment:this.answerComment,
      onAnswerInput:this.onAnswerInput,
      inputEvents: {
        input: e => (this.input = e.target.value),
        keydown: e => {
          if (e.key == "Enter") {
             e.preventDefault();
            this.addComment();
          }
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
</style>