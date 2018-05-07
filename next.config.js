module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/success': { page: '/success' },
      '/test-payment': { page: '/test_payment'}
    }
  }
}
