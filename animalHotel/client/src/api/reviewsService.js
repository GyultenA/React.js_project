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

export const createPosttwo = async (reviewData) => {
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



export const getOne = async (reviewId) => {
  try {
    const result = await request.get(`http://localhost:3030/data/reviews/${reviewId}`);
    return result

  } catch (err) {
    throw new Error('Error url request');
  }

}

export const remove = async (reviewId) => request.remove(`${baseUrl}/${reviewId}`);

export const editPost = async (gameId, gameData) => {
  const result = await request.put(`${baseUrl}/${gameId}`, gameData);

  return result;
};


export const getUserPosts = async (userId) => {
  const query = encodeURIComponent(`_ownerId="${userId}"`);
  const response = await request.get(`${baseUrl}?where=${query}`);

  return response;
}

