const PATH = Object.freeze({
  root: '/',
  content: '/content/',
  contentThumb(id) {
    return `/content/${id}/thumb.jpg`
  },
});

export default PATH;
