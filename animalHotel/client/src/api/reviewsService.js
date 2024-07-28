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
 //console.log(result)
 //console.log(`${baseUrl}?${where}`)
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


export const getUserPosts = async( userId) => {
 // const load = encodeURIComponent(`_ownerId="${userId}"`);

//const query = `where=recipeId%3D%22${reviewId}%22&load=author%3${userId}%3Ausers`
console.log(userId)
const query = encodeURIComponent(`_ownerId="${userId}"`);


  const response = await request.get(`${baseUrl}?where=${query}`)
 // const result = await response.json()

 //console.log(`${baseUrl}?where=${query}`)
// console.log(response)
 return response
}

//     data/reviews?where=_ownerId%3D%22undefined%22
//GET /data/comments?where=recipeId%3D%228f414b4f-ab39-4d36-bedb-2ad69da9c830%22
//GET /data/comments?where=recipeId%3D%228f414b4f-ab39-4d36-bedb-2ad69da9c830%22&load=author%3D_ownerId%3Ausers

//export const createReview = async (body) => {
  //  const result = await post(baseUrl, { ...body });
 //   return result;
//}