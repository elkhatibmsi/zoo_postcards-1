<template>
  <div class="postcard">
    <div v-if="background !='default'" class="postcard--background">
      <img :src="background" />
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
  </div>
</template>

<!--Ideas for another day
-add email functionality
-save (download) your postcard
-option to change fonts
-upload your own image for background
-add stickers or something to overlay on the postcard (emojis?)
-Place and move text over the image
  -resize, recolor text?
-->

<script>
export default {
  name: 'PostCard',
  props: {
    outputRecipient: {type: String},
    outputMsg: {type: String},
    outputSender: {type: String},
    background: {type: String}
  },
  data() {
    return{
      isDefault: {type: Boolean}
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
postcard {
  display: grid;
}
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

<!--
To Do:
-Make selected picture appear on the right side of the page
-Make it look pretty
-->
