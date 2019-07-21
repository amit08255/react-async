/**
 * Universal global scope object. In the browser this is `self`, in Node.js and React Native it's `global`.
 */
const globalScope = (() => {
  if (typeof self === "object" && self.self === self) return self
  if (typeof global === "object" && global.global === global) return global
  if (typeof global === "object" && global.GLOBAL === global) return global
  return {} // fallback that relies on imported modules to be singletons
})()

/**
 * Globally available object used to connect the DevTools to all React Async instances.
 */
globalScope.__REACT_ASYNC__ = globalScope.__REACT_ASYNC__ || {}

export default globalScope