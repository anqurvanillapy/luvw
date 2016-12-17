'use strict'

class Luvw {
  constructor (state) {
    this._state = state
    this._listeners = []
  }

  subscribe (listener) {
    this._listeners.push(listener)
  }

  notify (val) {
    this._listeners.forEach(listener => { listener(val) })
  }

  update (val) {
    if (arguments.length && this._state !== val) {
      this._state = val
      this.notify(val)
    }
    return this._state
  }
}
