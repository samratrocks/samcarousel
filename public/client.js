// Making a carousel using JS
// following a coding a pattern I call 'suppakewl'

// 1. Make everything functional abstractly
// 2. Add the timing function


function Carousel() {
  /*
   * Abstract Mockup
   * Rotates a bunch of abstract images in the time-space specified
   * 
  */
  
  
  let images = ['a', 'b', 'c', 'd']
  let currentImageIndex = 0
  let currentImageMax = images.length - 1
  

  
  
  this.start = () => {
    this.timer.start()
  }
  
  this.pause = () => {
    this.timer.pause()
  }
  
  this.next = () => {
    currentImageIndex += 1
    if (currentImageIndex > currentImageMax) { currentImageIndex = 0 }
  }
  
  this.previous = () => {
    currentImageIndex -= 1
    if (currentImageIndex < 0) { currentImageIndex = currentImageMax}
  }
  
  this.IO = () => {
    // Note: This function will handle interaction with the outside world
    //   and this will have references to all the DOM elements.
    console.log(images[currentImageIndex])
  }
  
  this.nextAndIO = () => {
    this.next()
    this.IO()
  }
  
  this.timer = new SamTimer({secs: 3, func: this.nextAndIO})
}

function SamTimer(props) {
    
  this.secs = props.secs ? props.secs : 3
  this.func = props.func

  this.start = () => {
    //TODO: implement the start
    let secs = this.secs
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.notify()
      }, secs * 1000)
    }
  }
  
  this.pause = () => {
    clearInterval(this.timer)
  }
  
  this.notify = () => {
    //TODO: Decide what kind of notification to use
    
    // temp
    this.func()
  }
  
}

let s = new SamTimer({secs: 3, func: console.log})