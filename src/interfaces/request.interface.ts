export interface IRequest{
    url: string
    body: any | null
    method: 'post' | 'get' | 'put' | 'patch' | 'delete'
}