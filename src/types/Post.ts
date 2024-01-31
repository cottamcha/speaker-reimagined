import type { User } from "./User";

export interface Post {
    id: string;
    content: string;
    user: User
    likesCount: number;
    commentCount: number;
    date: Date;
}