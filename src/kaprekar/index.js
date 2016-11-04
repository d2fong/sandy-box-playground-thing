var app = new Vue({
  el: '#app',
  data: {
    rangeStart: 1,
    rangeEnd: 50,
    error: ''
  },
  methods: {
    computeKaprekar: function() {
      var start = this.rangeStart;
      var end = this.rangeEnd;

      if (start < 1 || end < 1) {
        this.error = 'Numbers must be >= 0';
        return;
      }

      if (end > 100000) {
        this.error = 'Please do not input that large of a number, I will crash =(';
        return;
      }

      this.error = ''
      return kaprekarNumberChallenge(start, end)
    }
  }
});