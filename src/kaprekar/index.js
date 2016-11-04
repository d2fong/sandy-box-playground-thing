var app = new Vue({
  el: '#app',
  data: {
    rangeStart: 1,
    rangeEnd: 50
  },
  methods: {
    computeKaprekar: function() {
      var start = this.rangeStart;
      var end = this.rangeEnd;

      return kaprekarNumberChallenge(start, end)
    }
  }
});