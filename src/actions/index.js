var baseUrl = 'http://localhost:3000/api'

export function postNewProducts(values,cb){
    const request = fetch(baseUrl, {
        method:'POST',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_PRODUCT',
        payload:'Product Posted'
    }
}

export function postEditedProducts(values,id,cb){
    const request = fetch(`${baseUrl}/edit/${id}`, {
        method:'PUT',
        headers:{
            'Accept':"application/json",
            'Content-Type':"application/json"
        },
        body:JSON.stringify(values)
    }).then(()=>cb());

    return{
        type:'POST_EDITED_PRODUCT',
        payload:'Edited Product Posted'
    }
}

export function getProducts(){
    const request = fetch(baseUrl,{method:'GET'})
    .then(res=>res.json())

    return {
        type:'GET_INITIAL_PRODUCTS',
        payload:request

    }
}

export function getIndividualProduct(id){
    const request = fetch(`${baseUrl}/find/${id}`,{method:'GET'})
    .then(res=>res.json())

    return {
        type:'GET_INDIVIDUAL_PRODUCTS',
        payload:request

    }
}

export function advancedSearch(name,category,sex){
    const request= fetch(`${baseUrl}/search?name=${name}&category=${category}&sex=${sex}`,{method:'GET'})
    .then(res=>res.json())

    return{
        type:'GET_SEARCHED_PRODUCTS',
        payload:request
    }

}

export function clearProductState(){
    return{
        type:'CLEAR_PRODUCT_STATE',
        payload:{}
    }
}