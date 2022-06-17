import axios from "axios";

export const apiBase = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    headers: {
        'api-key': 'ca3b6a70-ed79-49e0-8cfe-9aa02ff94fb2',
    },
    withCredentials: true,
});


export enum ResponseResultCodesEnum {
    Success,
    Error,
}

export enum ResponseCaptchaResultCodeEnum {
    CaptchaRequired = 10,
}

export type ResponseType<D = {}, RC = ResponseResultCodesEnum> = {
    resultCode: RC
    messages: string[]
    data: D
}