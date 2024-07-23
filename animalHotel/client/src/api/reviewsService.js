/* eslint-disable no-unused-vars */
import * as request from "../lib/request";
//import{post} from "../../lib/requestertwo"


const baseUrl = 'http://localhost:3030/data/reviews'

export const createPost = async (postData) => {
    const response = await fetch('http://localhost:3030/data/reviews', {
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
 //console.log(result)
 return result
}

export const getOne = async (reviewId) => {
  try {
   // console.log(reviewId)
    const result = await request.get(`http://localhost:3030/data/reviews/${reviewId}`);
    //console.log(result)
// const review = Object.values(result)
 //console.log(review)
 console.log(result)
 //(console.log(result.title))
   return result

  } catch (err){
    throw new Error('Error url request');
  }

}

export const remove = async (reviewId) => request.remove(`${baseUrl}/${reviewId}`);


export const getUser = async(ownerId) => {
  const response = await fetch('http://localhost:3030/users')
  const result = await response.json()
  console.log(result)
}

//export const createReview = async (body) => {
  //  const result = await post(baseUrl, { ...body });
 //   return result;
//}