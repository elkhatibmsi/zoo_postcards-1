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
    <p> Animal: {{ background }}
      </p>

  </div>
</template>

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

Link (v-bind or v-model?) selected picture to the displayed background
In the script or in the css? Check ProductDisplay --- script, I think. Then just reference it in the css
  :style="{ backgroundColor: variant.color }"
Could I do that with the entire background image? Just using image.id or something?
I think I have to emit the image, since the info is going from PostCardForm -> PostCard

This would be so much easier if I didn't dynamically populate the image options list
What do I lose if I hard code it? It'll still be quick and easy to add an item
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
-add stickers or something to overlay on the postcard (emojis?)
 -->

<script>
export default {
  name: 'PostCard',
  props: {
    outputRecipient: {type: String},
    outputMsg: {type: String},
    outputSender: {type: String},
    background: {type: String}
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
