<template>
  <div class="postcard">
   </div>
   <div class="postcard-form-render">
    <p class="recipient-name">
      Sent to: {{ outputRecipient }}
    </p>
    <p class="message-output">
        Your message is: {{ outputMsg }}
    </p>
    <p class="sender-name">
      Sent by: {{ outputSender }}
    </p>
  </div>
</template>

<!-- I got it working, with a few caveats:
Since the article only dealt with emitting one thing at a time, rather than 3 variables 
like we want, I had to do a separate emit/receive for each argument
also, because I couldn't emit all 3 variable in one command, I had to make each input box submit by
pressing enter, so the submit button is just sitting there uselessly right now-->

<!--
TO DO:
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

<!--
v-model syntax:
v-model:argument-prop-name="data-to-bind"
-->

<!--Ideas for another day (ie, not to be done by me)
-add email functionality
-save (download) your postcard
-option to change fonts
-upload your own image for background
-add stickers or something to overlay the postcard (emojis?)
 -->

<script>
export default {
  name: 'PostCard',
  props: {
    outputRecipient: {type: String},
    outputMsg: {type: String},
    outputSender: {type: String}
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
