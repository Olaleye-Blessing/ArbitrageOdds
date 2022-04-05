export type AuthUser = {
    email: string;
    firstname: string;
    lastname: string;
    _id: string;
};

export type LoginError = {
    message: string;
    status: string;
};
