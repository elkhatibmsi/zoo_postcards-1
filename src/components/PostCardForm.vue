<template>
  <div class="postcard-form-input">
    <div class="sender-input">
      <label>Sender:  </label>
      <br><br>
      <input
        class="input"
        v-model="sender"
        @change="submitSender"
      />
    </div>
    <hr>
    <div class="recipient-input">
      <label>Recipient: </label>
      <br><br>
      <input 
        class="input"
        v-model="recipient"
        @change="submitRecipient"
      />
    </div>
    <hr>
    <div class="msg-input">
      <label>Enter message: </label>
      <br><br>
      <input
        class="input msg-input-box"
        v-model="msg"
        @change="submitMsg"
      />
    </div>
    <hr>
    <div class="dropdown">
      <label>Select Background: </label>
      <select 
        class="background-dropdown"
        v-model="selectedImage"
        @change="updateImage($event)" 
        >
        <option value="default" selected>--Select a background--</option>
        <option
          v-for="(image, index) in backgrounds"
          :key="index"
          :description="image.title"
          :value="image.image_large"
          > {{image.title}} </option>
      </select>
      <button class="button" @click="changeBackground"> Use this background! </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostCardForm',
  data() {
    return{
      backgrounds: [],
      selectedImage: "default",
    }
  },
  mounted() { //Where we get the data from the json file
    fetch('https://nationalzoo.si.edu/pyd/animals')
      .then(res => res.json())
      .then(data => this.backgrounds = data)
      .catch(err => console.log(err.message))
  },
  methods: {
    //form-inputs is what it is being emitted as (how PostCard will receive it), formInputs is the actual data being passed

    submitRecipient: function() {
      this.$emit("input-recipient", this.recipient);
    },
    submitMsg: function() {
      this.$emit("input-msg", this.msg);
    },
    submitSender: function() {
      this.$emit("input-sender", this.sender);
    },
    updateImage: function(event) {  //tells app to change the image
      this.selectedImage = event.target.value;
      //console.log(event.target.value);
      return this.selectedImage;
    },
    changeBackground: function() {  //tells app what the new image will be
      this.$emit("background-animal", this.selectedImage);
      return;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postcard-form-input {

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
  height: 50px;
}

.dropdown {
  padding: 10px;
}

.button {
  margin: 30px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 14px;
  width: 160px;
  height: 40px;
  color: white;
  padding: 10px;
  text-align: center;
  cursor: pointer;
}

</style>