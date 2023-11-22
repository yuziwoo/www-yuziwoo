class Contenty {
  // constructor() {}

  static setContenty() {
    if (window.contenty instanceof Contenty) {
      window.contenty.reset();
      return window.contenty;
    }
    window.contenty = new Contenty();
  }

  reset() {}
}

export default Contenty;
