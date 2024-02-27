export const errorMessage = {
    name: "Name is required!",
    email: "It should be a valid email address",
    password: "Username should be 6-15 characters and  include at least 1 letter, 1 number and 1 special characters!",
    confirmPassword: "Password don't match!",
    town: "Town is required!",
    phone: "It should be a valid phone number",
    street: "Street is required!",
    title: "Title is required!",
    price: "Price must min 1",
    description: "Description is required!",
    image: "It should be a valid image"

};

export const inputValidation = {
    password: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$',
    phone: '^([0]{1}[8]{1}[7-9]{1}[7-9]{1}[0-9]{6})',
    image: 'https?:\/\/.*\.(?:png|jpg|jpeg)'
};

export const initialValuesCreate = {
    title: '',
    image: '',
    price: '',
    description: ''
};

export const initialFocusCreate = {
    title: false,
    image: false,
    price: false,
    description: false,
    
};

export const initialValuesRegister = {
    name: '',
    image: '',
    email: '',
    phone: '',
    town: '',
    street: '',
    password: '',
    confirmPassword: '',
};

export const initialFocusregister = {

    name: false,
    image: false,
    email: false,
    phone: false,
    town: false,
    street: false,
    password: false,
    confirmPassword: false,
}