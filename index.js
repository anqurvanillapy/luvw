class Observable {
  constructor (state, listener) {
    this.state = state
    this.listeners = []

    this.listeners.push(listener)
  }

  notify (val) {
    this.listeners.forEach(listener => { listener(val) })
  }

  accessor (val) {
    if (arguments.length && this.state !== val) {
      this.state = val
      this.notify(val)
    }
    return this.state
  }
}

// var obs = new Observable(10)
// obs.accessor.subscribe(n => { console.log(n) })
// obs.accessor(12)
// obs.accessor(12)
// obs.accessor(14)
