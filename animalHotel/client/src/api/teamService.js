import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/teams'

export const getAllTeam = async () => {
    const result = await request.get(baseUrl);
    //const reviews = Object.values(result)
    // console.log(result)
    return result
}

export const getTeamById = async (teamId) => {
    try {
        console.log(teamId)
        const result = await request.get(`${baseUrl}/${teamId}`);

        console.log(result)

        return result

    } catch (err) {
        throw new Error('Error Url request');
    }

}