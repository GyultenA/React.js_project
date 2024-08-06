import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/teams'

export const getAllTeam = async () => {
    const result = await request.get(baseUrl);
    return result;
}

export const getTeamById = async (teamId) => {
    try {
        const result = await request.get(`${baseUrl}/${teamId}`);
        return result;

    } catch (err) {
        throw new Error('Error Url request');
    }

}