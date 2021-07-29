<template>
  <div class="postcard">
    <!-- <h1>{{ msg }}</h1> -->
   </div>
   <div @form-inputs="updatePostCard" class="postcard-form-render">
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
To make it work like before, cut/paste the <div class="postcard"> section above into the end of the template section in PostCardForm.vue
 -->

<!--
TO DO:
-fix import form-inputs from PostCardForm.vue
  -try using vanilla javascript?
  -Whole thing BROKE
-add background to live rendering component
  -how? Also need to fix styling so it will show (aspect ratio, proper size, fields on postcard, etc)
-link dropdown to changing background
  -use code from productDisplay:
    in a div:
    @mouseover="updateVariant(index)"
    method:
    updateVariant(index) {
                this.selectedVariant = index
            },
-->

<!--For emit issues:
v-model syntax:
v-model:argument-prop-name="data-to-bind"

<PostCard @form-inputs="addPostCard"/>

 addReview(review) {
            this.reviews.push(review)
        }


Use this, replace HelloWorld with a new postcard
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

<!--Ideas for another day (ie, not to be done by me)
-add email functionality
-save (download) your postcard
-option to change fonts
-upload your own image for background
-add stickers or something to overlay the postcard (emojis?)
 -->

<script>
// import PostCardForm from './components/PostCardForm.vue'
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
    // updatePostCard(form-inputs) {   //this is entirely wrong
    //   msg = form-inputs.msg;
    //   sender = this.sender;
    //   recipient = this.recipient
    // }
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
