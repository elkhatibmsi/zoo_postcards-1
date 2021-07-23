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
        <option v-for="image in backgrounds"
        :key="image.index"
        :description="image.animal"> {{image.animal}} </option>
        <!-- v-for="image in backgrounds" {
          :description="image.animal"
          <option value="{{image.animal}}"> {{image.animal}} </option> -->
        }
        <!-- <option value="elephant">Elephant</option>
        <option value="panda">Panda</option>
        <option value="tortoise">Tortoise</option> -->
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
  data() {
    return{
      backgrounds: [
        {id: 1, animal: 'Elephant', image: './assets/elephant.jpg'},
        {id: 2, animal: 'Panda', image: './assets/panda.jpg'},
        {id: 3, animal: 'Tortoise', image: './assets/tortoise.jpg'}
      ]
    }
  },
  methods: {  //This part is submitting the emit, but can't get PostCard.vue to receive it
    Submit() {
      if (this.msg === '' || this.sender === '' || this.recipient === null) {
        alert('PostCard is incomplete. Please fill out every field.')
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
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: lightblue;
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

.button {
  background-color: #39495c;
  border-radius: 5px;
  color: white;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  margin-top: 15px;
  margin-bottom: 5px;
}

</style>