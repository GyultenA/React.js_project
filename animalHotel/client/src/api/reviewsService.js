import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/reviews'

export const createPost = async (postData) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        header: {
             'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });
    const result = await response.json();
    return result
}

export const getAll = async () => {
 const result = await request.get(baseUrl);
 //const reviews = Object.values(result)
 console.log(result)
 return result
}

export const getOne = (reviewId) => request.get(reviewId)