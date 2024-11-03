import type { IRequest } from "@/interfaces/request.interface";
import axios from "axios";
import { BASE_URL } from "@/config/config";

export default function({body, url, method}: IRequest){
    const request = axios({
        method: method,
        url: BASE_URL + url,
        data: body
    })

    return request
}