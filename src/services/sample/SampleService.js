import {mainUrl} from "store/constant"

class SampleService {
  
    //Dog Public API
    addProduct(serviceCaller, requestBody,callback,errorCallBack){
    let headers= { 'Content-Type': 'application/json'};
        serviceCaller.post(mainUrl + "/products/add", undefined, headers, requestBody, callback, errorCallBack)
    }
    getProducts(serviceCaller, queryParams, callback,errorCallBack){
        serviceCaller.get(mainUrl + "/products", queryParams, undefined  ,  callback, errorCallBack)
    }
    updateProduct(serviceCaller, requestBody,callback,errorCallBack){
        let headers= { 'Content-Type': 'application/json'};
        serviceCaller.update(mainUrl + "/products", undefined, headers, requestBody, callback, errorCallBack)
    }
    deleteProduct(serviceCaller, requestBody, callback,errorCallBack){
        let headers = {'Accept': 'application/json','Content-Type': 'application/json'};
        serviceCaller.delete(mainUrl + "/products", undefined, headers  , requestBody, callback, errorCallBack)
    }
}

export default new SampleService();