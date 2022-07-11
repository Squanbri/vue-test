export const state = () => ({
  isProductsLoading: true,
  products: []
})

export const getters = {
  getProductsLoading: state => state.isProductsLoading,
  getProducts: state => state.products
}

export const mutations = {
  initializeStore(state) {
    if (process.client) {
      const localStageProducts = localStorage.getItem('products')
      if (localStageProducts) {
        state.products = JSON.parse(localStageProducts)
      }
    }
  },
  setProductsLoading(state, isLoading) {
    state.isProductsLoading = isLoading
  },
  addProduct(state, newProduct) {
    state.products.push(newProduct)
  },
  removeProduct(state, id) {
    const index = state.products.findIndex(product => product.id === id)
    state.products.splice(index, 1)
  },
  sortByPriceAsc(state) {
    state.products = state.products.sort((a, b) => a.price - b.price)
  },
  sortByPriceDesc(state) {
    state.products = state.products.sort((a, b) => b.price - a.price)
  },
  sortByName(state) {
    state.products = state.products.sort((a, b) => {
      const lowerA = a.name.toLowerCase()
      const lowerB = b.name.toLowerCase()
      if (lowerA < lowerB) {
        return -1
      } else if (lowerA > lowerB) {
        return 1
      } else {
        return 0
      }
    })
  }
}
