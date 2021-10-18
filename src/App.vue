<template>
  <PostCardForm
    @input-recipient="UpdateRecipient"
    @input-msg="UpdateMsg"
    @input-sender="UpdateSender"
    @background-animal="UpdateBackground"
  />
  <PostCard
    :outputRecipient="outputRecipient"
    :outputMsg="outputMsg"
    :outputSender="outputSender"
    :background="background"
  />
</template>

<script>
import PostCard from './components/PostCard.vue'
import PostCardForm from './components/PostCardForm.vue'

export default {
  name: 'App',
  components: {
    PostCardForm,
    PostCard
  },
  data: function() {
    return {
      outputRecipient: "",
      outputMsg: "",
      outputSender: "",
      background: "",
    };
  },
  methods: {
    // UpdatePostCard(formInputs) { 
    //   this.outputRecipient = formInputs.recipient;
    //   this.outputMsg = formInputs.msg;
    //   this.outputSender = formInputs.sender;
    // },
    UpdateRecipient(outputRecipient) {
      this.outputRecipient = outputRecipient;
    },
    UpdateMsg(outputMsg) {
      this.outputMsg = outputMsg;
    },
    UpdateSender(outputSender) {
      this.outputSender = outputSender;
    },
    UpdateBackground(background) {
      this.background = background;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
