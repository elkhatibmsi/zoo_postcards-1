<template>
  <PostCardForm
    @formInputs="UpdatePostCard"
    @input-recipient="UpdateRecipient"
    @input-msg="UpdateMsg"
    @input-sender="UpdateSender"
  />
  <PostCard
    :outputRecipient="outputRecipient"
    :outputMsg="outputMsg"
    :outputSender="outputSender"
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
      outputSender: ""
    };
  },
  methods: {
    UpdatePostCard(formInputs) { 
      this.outputRecipient = formInputs.recipient;
      this.outputMsg = formInputs.msg;
      this.outputSender = formInputs.sender;
    },
    UpdateRecipient(outputRecipient) {
      this.outputRecipient = outputRecipient;
    },
    UpdateMsg(outputMsg) {
      this.outputMsg = outputMsg;
    },
    UpdateSender(outputSender) {
      this.outputSender = outputSender;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
