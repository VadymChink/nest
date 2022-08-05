export const SWAGGER_EXAMPLE_CREATE_USER = {
    id: 1,
    username: 'Vadym',
    email: 'vadym@gmail.com',
    age: 20,
    status: true,
    password: 'qwerty',
    create_at: '2022-07-31T09.35.54.845Z'
}
export const SWAGGER_EXAMPLE_LOGIN_USER = {
    user: {
        id: 19,
        username: 'vadym',
        email: 'vadym1@gmail.com',
        age: null,
        status: false,
        password: '$2a$10$BtxJsiOYll0bUdMY73lBTubPaI1cNtbWlYUMIX0em6oSmNXPg1kji',
        created_at: '2022-08-02T08:30:28.335Z'
    },
    token: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhZHltMUBnbWFpbC5jb20iLCJuYW1lIjoidmFkeW0iLCJpZCI6MTksImlhdCI6MTY1OTcwMTgzOCwiZXhwIjoxNjU5Nzc3NDM4fQ.26WQ5F0vgakxBzgkKZ5Y6Rfnp27tNbkpPUGF4hfZrbY'
    }
}
export const SWAGGER_EXAMPLE_REGISTER_USER_BadRequest = [
    {
        statusCode: 400,
        message: [
            "username should not be empty",
            "username must be longer than or equal to 2 characters",
            "username must be a string",
            "email should not be empty",
            "email must be an email",
            "email must be a string",
            "password must be longer than or equal to 2 characters",
            "password should not be empty",
            "password must be a string",
        ],
        error: "Bad Request"
    },
    {
        statusCode: 400,
        message: "User is already exist"
    }]
export const SWAGGER_EXAMPLE_CREATE_USERS = [
    {
        id: 1,
        username: 'Vadym',
        email: 'vadym@gmail.com',
        age: 20,
        status: true,
        password: 'qwerty',
        create_at: '2022-07-31T09.35.54.845Z'
    },
    {
        id: 2,
        username: 'Inna',
        email: 'inna@gmail.com',
        age: 23,
        status: true,
        password: 'qwerty',
        create_at: '2022-07-31T09.35.54.845Z'
    }]