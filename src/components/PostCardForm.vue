<template>
  <div class="postcard-form-input">
    <div class="recipient-input">
      <label>Recipient: </label>
      <input 
        class="input"
        v-model="recipient"
        @change="submitRecipient"
      />
    </div>
    <div class="msg-input">
      <label>Enter message: </label>
      <input
        class="input msg-input-box"
        v-model="msg"
        @change="submitMsg"
      />
    </div>
    <div class="sender-input">
      <label>Sender:  </label>
      <input
        class="input"
        v-model="sender"
        @change="submitSender"
      />
    </div>
    <div class="dropdown">
      <label>Select Background: </label>
      <select 
        class="background-dropdown"
        v-model="selectedImage"
        @change="updateImage($event)" 
        >
        <option value="default" selected>--Select a background--</option>
        <!-- When I change the "default" here to something else, it goes blank until something is selected,
        And if I select the 'select an animal', it says "default" on the render.
        But if I change :value to :text or something (so I can keep the value='default'),
        then it all breaks -->
        <option
          v-for="(image, index) in backgrounds"
          :key="index"
          :description="image.animal"
          :value="image.image"
          > {{image.animal}} </option>
      </select>
      <button class="button" @click="changeBackground"> Use this background! </button>
    </div>
  </div>
  <hr>
</template>

<script>
export default {
  name: 'PostCardForm',
  data() {
    return{
      backgrounds: [ //array of animal background images
        {id: 1, animal: 'Elephant', image: './assets/elephant.jpg'},
        {id: 2, animal: 'Panda', image: './assets/panda.jpg'},
        {id: 3, animal: 'Tortoise', image: './assets/tortoise.jpg'}
      ],
      selectedImage: "default",
    }
  },
  methods: {
    //   this.$emit('form-inputs', formInputs)
    //   //form-inputs is what it is being emitted as (how PostCard will receive it), formInputs is the actual data being passed

    submitRecipient: function() {
      this.$emit("input-recipient", this.recipient);
    },
    submitMsg: function() {
      this.$emit("input-msg", this.msg);
    },
    submitSender: function() {
      this.$emit("input-sender", this.sender);
    },
    updateImage: function(event) {
      this.selectedImage = event.target.value;
      console.log(event.target.value);
      return this.selectedImage;
      // This will display the animal name on the render, but
      // We need the link (.image of the background array)
      // When we swap .value for .link, it says undefined?
    },
    changeBackground: function() {
      this.$emit("background-animal", this.selectedImage);
      return;
    }
  },
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