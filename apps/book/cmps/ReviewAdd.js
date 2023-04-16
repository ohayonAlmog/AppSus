export default {
  template: `
       <section   class="review-add"> 
           <form @submit.prevent="submitReview">
               Full name:
               <input ref="readerName"   type="text" v-model="review.readerName" class="readerName" />
             <label >
              <div class="rating">
             Rate book:
             <span v-for="idx in 5"  @click="saveRate(idx)"  > {{getAStar(idx)}} </span>
           </div>
             </label>
             <label >
                 Read at:
                 <input type="date" v-model="review.readAt"   />
             </label>
             Comments:
             <textarea   cols="30" rows="10" v-model="review.comments" ></textarea>


             <button >Submit</button>
           </form>
         
           
      </section>
    `,
  data() {
    return {
      review: {
        readerName: 'User123',
        rating: 1,
        readAt: null,
        comments: '',
      },
    }
  },
  computed: {},
  methods: {
    formatDate() {
      var date = new Date()
      var years = date.getFullYear()
      var months = date.getMonth() + 1
      var days = date.getDate()
      var timeFormat =
        years +
        '-' +
        (months + '').padStart(2, '0') +
        '-' +
        (days + '').padStart(2, '0')
      return timeFormat
    },

    submitReview() {
      this.$emit('sentReview', this.review)
      this.review = {
        readerName: '',
        rating: 1,
        readAt: null,
        comments: '',
      }
      this.review.readAt = this.formatDate()
    },
    getAStar(idx) {
      if (this.review.rating < idx) return '☆'
      else return '★'
    },
    saveRate(idx) {
      this.review.rating = idx
    },
  },
  created() {
    this.review.readAt = this.formatDate()
  },
  mounted() {
    const txtReaderName = this.$refs.readerName
    txtReaderName.select()
  },
}
