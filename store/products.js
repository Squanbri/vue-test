export const state = () => ({
  products: [
    {
      id: 1,
      name: 'Наименование товара 2',
      description: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      image: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
      price: 10000
    }
  ]
})

export const getters = {
  getProducts: state => state.products
}

export const mutations = {
  addProduct(state, newProduct) {
    state.products.push(newProduct)
  },
  removeProduct(state, id) {
    const index = state.products.findIndex(product => product.id === id)
    state.products.splice(index, 1)
  }
}
