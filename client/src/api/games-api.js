import * as requester from './requester'

const BASE_URL ='https:/localhost:3030/jsonstore/games'

export const getAll = () => requester.get(BASE_URL);