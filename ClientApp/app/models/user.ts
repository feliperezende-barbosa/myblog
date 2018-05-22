import { Post } from './post';

export interface User{ 
    id: number;   
    name: string;
    email: string;
    password: string;
}

export interface UserResource{ 
    id: number;   
    name: string;
    email: string;
    post: Post[];
}