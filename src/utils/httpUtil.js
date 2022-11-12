class HttpUtil {
    get = function(url, queryParams,headers, callback, errorCallBack){
        let completeUrl = url + this.getQueryString(queryParams)
        const requestOptions = {
            method: 'GET',
            headers: headers
            };
        fetch(completeUrl, requestOptions)
        .then(response => {
            if(response.status === 401 && window.location.pathname !== "/redirect" && window.location.pathname !== "/login"){
                window.location.assign(window.location.origin + "/redirect");
            }
            return response.json();
        })
        .then(data => callback(data))
        .catch((err) => {
            errorCallBack(err)
        })
    }
    
    delete = function(url, queryParams,headers, requestBody, callback, errorCallBack){
        let completeUrl = url + this.getQueryString(queryParams)
        const requestOptions = {
            method: 'DELETE',
            headers: headers,
            body: requestBody
            };
        fetch(completeUrl, requestOptions)
        .then(response => {
            if(response.status === 401 && window.location.pathname !== "/redirect" && window.location.pathname !== "/login"){
                window.location.assign(window.location.origin + "/redirect");
            }
            return response.json()
        })
        .then(data => callback(data))
        .catch((err) => errorCallBack(err))
    }

    post =  function(url, queryParams, headers, requestBody, callback, errorCallBack){
        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: requestBody,
            };
        let completeUrl = url + this.getQueryString(queryParams)
        fetch(completeUrl, requestOptions)
            .then(response => {
                if(response.status === 401 && window.location.pathname !== "/redirect" && window.location.pathname !== "/login"){
                    window.location.assign(window.location.origin + "/redirect");
                }
                return response.json()
            })
            .then(data => callback(data))
            .catch((err) =>{ errorCallBack(err);
            });
    }

    update =  function(url, queryParams, headers, requestBody, callback, errorCallBack){
        const requestOptions = {
            method: 'PUT',
            headers: headers,
            body: requestBody,
            };
        let completeUrl = url + this.getQueryString(queryParams)
        fetch(completeUrl, requestOptions)
            .then(response => {
                if(response.status === 401 && window.location.pathname !== "/redirect" && window.location.pathname !== "/login"){
                    window.location.assign(window.location.origin + "/redirect");
                }
                return response.json()
            })
            .then(data => callback(data))
            .catch((err) =>{ errorCallBack(err);
            });
    }

        getQueryString = function(queryParams) {
        let queryString = '';
        for(let param in queryParams){
            if(queryString === ''){
                queryString += '?';
            }else{
                queryString += '&'
            }
            queryString =queryString + param + '=' + queryParams[param]
        }

        return queryString;
    }

    
}

export default HttpUtil;
