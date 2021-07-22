<template>
  <div class="postcard">
    <h1>{{ msg }}</h1>
   </div>
   <div class="postcard-form-render">
    <p class="recipient-name">
      Sent to: {{ recipient }}
    </p>
    <p class="message-output">
        Your message is: {{ msg }}
    </p>
    <p class="sender-name">
      Sent by: {{ sender }}
    </p>
  </div>
</template>

<!--
I need to import or receive formInputs from PostCardForm.vue
To make it work like before, cut/paste the <div class="postcard"> section above into the end of the template section in PostCardForm.vue
 -->

<!--
TO DO:
-fix import formInputs from PostCardForm.vue
  -try using vanilla javascript?
-insert dropdown menu to select animal background
-add background to live rendering component
-link dropdown to changing background
  -use code from productDisplay:
    in a div:
    @mouseover="updateVariant(index)"
    method:
    updateVariant(index) {
                this.selectedVariant = index
            },
-->

<!-- 
From Intro_To_Vue/components/ProductDisplay.js:
<review-form @review-submitted="addReview"></review-form>
  -(review-submitted is what it was emitted as)

 addReview(review) {
            this.reviews.push(review)
        }
  
AddReview is a method creating a new review, so maybe do that with formInputs?
But I need a method to create that new postcard

Use this, replace HelloWorld with a new postcard
  -this says "when getting the message, do this"
<HelloWorld @changeMsg="setMessage" :msg="welcomeMsg"/>

This is how to use emit in a method:
methods: {
        changeMsg() {
          this.$emit("changeMsg", this.welcomeMsg);
        }
      }
This was used with a button using onSubmit/@click

Previous 2 examples from https://pusher.com/tutorials/vue-custom-events
-->





<script>
export default {
  name: 'PostCard',
  props: {
    // msg: String,
    // sender: String,
    // recipient: String 
  },
  data() {
    
  },
  methods: {

  },
  computed: {
        msg() {
            return this.msg
        },
        sender() {
            return this.sender
        },
        recipient() {
            return this.recipient
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
