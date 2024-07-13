
const baseUrl = 'http://localhost:3000/reviews'

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