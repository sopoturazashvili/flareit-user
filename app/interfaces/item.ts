export interface Item {
    id: number;
    backgroundImage: string;
    title: string;
}

export interface RegisterInputs {
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ErrorResponse {
    message: string;
}

export interface AuthInputs {
    email: string;
    password: string;
}

export interface Response {
    access_token: string;
}
