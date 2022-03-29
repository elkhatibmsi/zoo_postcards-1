<template>

        <div class="postcard row">
          <div v-if="background !='default'" class="postcard--background column-left">
            <img :src="background" />
          </div>    
          <div class="postcard-form-render column-right">
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

<button class="button">Print PDF</button>
</template>

<template>
<VueHtml2pdf 
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="myPDF"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"
        ref="html2Pdf"
     
       <section v-slot:pdf-content> 
       </section>
         
</VueHtml2pdf>
</template>

<!--Ideas for another day
-add a blank "choose animal" default image
-filter search for animal backgrounds
-make states persist (doesn't reset when you refresh page)
-add email functionality
-save (download) your postcard
-option to change fonts
-upload your own image for background
-add stickers or something to overlay on the postcard (emojis?)
-Place and move text over the image
  -resize, recolor text?
-->

<script>
 import VueHtml2pdf from 'vue-html2pdf'

export default {
  name: 'PostCard',
  props: {
    outputRecipient: {type: String},
    outputMsg: {type: String},
    outputSender: {type: String},
    background: {type: String}
  },
  // components: {
  //   VueHtml2pdf
  // },
  data() {
    return{
      isDefault: {type: Boolean}
    }
  },
  methods: {
    generateReport () {
            this.$refs.html2Pdf.generatePdf()
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postcard {
  display: grid;
  border: 2px;
  border-style: solid;
  border-color: black;
  margin-top: 35px;
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
.postcard--background img {
  width: auto;
  height: 100%;
}
.column {
  float: left;
}
.column-left {
  width: 35%;
}
.column-right {
  width: 65%
}
</style>

<!--
To Do:
-Make it look pretty
-->
