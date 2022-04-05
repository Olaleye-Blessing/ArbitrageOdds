export interface SuccessResponse<Data> {
    status: string;
    message: string;
    data: Data;
}

export interface SignUpDetails {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptedTerms: boolean;
}
