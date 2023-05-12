import { useQuery } from 'react-query'

export const useCustomQuery = (queryId?: any, queryFn?: any, item?: any) => {
    return useQuery(queryId, queryFn, { ...item })
}

export const useCustomQueryId = (queryId?: any, id?: any, queryFn?: any, item?: any) => {

    const newArray = [queryId, ...id]
    return useQuery(newArray, queryFn, { ...item })
}

export const useCustomQuery2 = (queryOne?: boolean, queryId?: any, id?: any, queryFn?: any, item?: any) => {

    const newQueryId = queryOne ? [queryId, ...id] : queryId

    return useQuery(newQueryId, queryFn, { ...item })
}
