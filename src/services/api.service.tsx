import {IUser} from "@/models/IUser";
import {IPost} from "@/models/IPost";
import {IComment} from "@/models/IComment";

export const getAllUsers = async ():Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

export const getAllPosts = async ():Promise<IPost[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}

export const getAllComments = async ():Promise<IComment[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
}