import axios from 'axios'

const PRODUCTS_REST_API_URL = "http://127.0.0.1:8000/api/products/";
//const EMPLOYEE_REST_API_URL = "http://localhost:8080/empapi/employee/";

class ProductService {

    getAllProducts() {
        return axios.get(PRODUCTS_REST_API_URL);
    }

    deleteProductById(id) {
        const url=`${PRODUCTS_REST_API_URL}`
        return axios.delete(url,{data:{id:id}});
    }

}
export default new ProductService();