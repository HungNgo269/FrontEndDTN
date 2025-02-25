import ClientApi from './ClientApi'

const TestApi = {
  GetData: async (type: string) => {
    try {
      const respone = await ClientApi.get(`/products/category/${type}`)
      return respone.data
    } catch (error) {
      console.log('Xảy ra lỗi khi lấy data >>> ', error)
      throw error
    }
  }
}
export default TestApi
