import axios, {AxiosResponse} from "axios"

type ResponseType = {
    errorText: string
    info: string
    yourBody: boolean
}

const instance  = axios.create({
    baseURL:"https://neko-cafe-back.herokuapp.com/"
})
export const requestApi = {
    make (success: boolean) {
        return instance.post<ResponseType>('auth/test', {success})
    }
}