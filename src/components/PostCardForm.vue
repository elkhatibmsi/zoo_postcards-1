<template>
  <div class="postcard-form-input">
    <!-- <h2>This is where the form will live</h2> -->
    <div class="recipient-input">
      <label>Recipient: </label>
      <input class="input" :recipient="recipient"/>
    </div>
    <div class="msg-input">
      <label>Enter message: </label>
      <input class="input msg-input-box" :msg="msg"/>
    </div>
    <div class="sender-input">
      <label>Sender:  </label>
      <input class="input" :sender="sender"/>
    </div>
    <div class="dropdown">
      <label>Select Background: </label>  <!--Put this in a v-for when you get the chance-->
      <select class="background-dropdown">
        <option value="default" selected>--Select a background--</option>
        <option value="elephant">Elephant</option>
        <option value="panda">Panda</option>
        <option value="tortoise">Tortoise</option>
      </select>
    </div>
  </div>
  <button class='button submit-button' @onClick="Submit"> Submit </button>
  <hr>
</template>

<script>
export default {
  name: 'PostCardForm',
  props: {
    msg: String,
    sender: String,
    recipient: String 
  },

  methods: {  //This part is submitting the emit, but can't get PostCard.vue to receive it
    Submit() {
      if (this.msg === '' || this.sender === '' || this.recipient === null) {
        alert('Review is incomplete. Please fill out every field.')
        return
      }
      
      let formInputs = {
              msg: this.msg,
              sender: this.sender,
              recipient: this.recipient
          }
      this.$emit('formInputs', formInputs)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postcard-form-input {
  padding: 20px;
}

.recipient-input {
  padding: 10px;
}

.msg-input {
  padding: 10px;
}

.sender-input {
  padding: 10px;
}

.input {
  width: 10%;
  height: 25px;
}

.msg-input-box {
  padding: 10px;
  width: 20%;
  height: 50px;
}

.dropdown {
  padding: 10px;
}

</style>