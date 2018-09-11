function main () {
  let message = {

    message: [
      'game development;',
      'virtual reality;',
      'film;',
      'world building;',
    ],
    counterS: 0,
    counterL: 0,
    deleteS: false,

    init: function () {
      this.cacheElem()
      this.type()
    },

    cacheElem: function () {
      this.$text = $('.text')
    },

    type: function () {
      let message = this.message[this.counterS],
        that = this,
        speed = 0

      message = !this.deleteS
        ? message.slice(0, ++this.counterL)
        : message.slice(0, --this.counterL)
      if (this.message[this.counterS] !== message && !this.deleteS) {
        this.$text.text(message)
        speed = 90
      }
      else {
        this.deleteS = true
        speed = this.message[this.counterS] === message ? 1000 : 40
        this.$text.text(message)
        if (message === '') {
          this.deleteS = false
          this.counterS = this.counterS < this.message.length - 1
            ? this.counterS + 1
            : 0
        }
      }
      setTimeout(function () {that.type()}, speed)
    },
  }
  message.init()
}

main();