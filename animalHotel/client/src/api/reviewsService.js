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

export const createPosttwo  = async (reviewData) => {
  const result = await request.post(baseUrl, reviewData);

  return result;
};

export const getAll = async () => {
  //const where = encodeURIComponent(`sortBy=_createdOn desc`);
const where = `sortBy=_createdOn%20desc`
 const result = await request.get(`${baseUrl}?${where}`);
 console.log(result)
 console.log(`${baseUrl}?${where}`)
 return result

}

//http://localhost:3030/data/reviews?sortBy%3D_createdOn%20desc
 //                    /data/recipes?sortBy=_createdOn%20desc

export const getOne = async (reviewId) => {
  try {
   // console.log(reviewId)
    const result = await request.get(`http://localhost:3030/data/reviews/${reviewId}`);
    //console.log(result)
 console.log(result)
 //(console.log(result.title))
   return result

  } catch (err){
    throw new Error('Error url request');
  }

}

export const remove = async (reviewId) => request.remove(`${baseUrl}/${reviewId}`);

export const editPost = async (gameId, gameData) => {
  const result = await request.put(`${baseUrl}/${gameId}`, gameData);

  return result;
};


export const getUser = async(ownerId) => {
  const response = await fetch('http://localhost:3030/users')
  const result = await response.json()
  console.log(result)
}

//export const createReview = async (body) => {
  //  const result = await post(baseUrl, { ...body });
 //   return result;
//}