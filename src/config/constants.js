export const errorMessage = {
    name: "Name shoud be 3-16 characters and shouldn't include any special characters!",
    email: "It should be a valid email address",
    lastname: "Last Name shoud be 3-16 characters and shouldn't include any special characters!",
    password: "Username shoud be 6-15 characters and  include at least 1 letter, 1 number and 1 special characters!",
    confirmPassword: "Password don't match!",
    town: "It should be at least 3 characters",
    phone: "It should be a valid phone number",
    street: "It should be at least 3 characters",
    type: "Type is not selected ",
    title: "Title is required!",
    price: "Price must min 1",
    description: "It should be at least 3 characters",
    image: "It should be a valid image"

};

export const inputValidtion = {
    password: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$',
    phone: '^([0]{1}[8]{1}[7-9]{1}[7-9]{1}[0-9]{6})',
    name: '^(?=.{3,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$',
    type: '/(?:^|(?<= ))(waterpumps|systems|parts|machines|pipes|tools [1-7]\d*$)(?:(?= )|$)/',
    town: '^(*[a-zA-Z]){3,}[0-9]*$',
    street: '^(*[a-zA-Z]){3,}[0-9]*$',
    description: '^([0-9]*[a-zA-Z]){3,}[0-9]*$',
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
    lastname: '',
    email: '',
    phone: '',
    town: '',
    street: '',
    password: '',
    confirmPassword: '',
};

export const initialFocusregister = {

    name: false,
    lastname: false,
    email: false,
    phone: false,
    town: false,
    street: false,
    password: false,
    confirmPassword: false,
}