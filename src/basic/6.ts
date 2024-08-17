

interface Address {
    city: string;
    country: string;
}

interface User {
    name: string;
    age: number;
    email: string;
    address?: Address; // Необов'язкова властивість
}

// Об'єкт mango
const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

// Об'єкт poly
const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};
