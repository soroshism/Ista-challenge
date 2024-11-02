import { faker } from '@faker-js/faker';

export const generateProducts = (page) => {
    const products = [];
    const startIndex = (page - 1) * 20;

    for (let i = 0; i < 20; i++) {
        products.push({
            id: startIndex + i + 1,
            name: faker.commerce.productName(),
            price: parseFloat(faker.commerce.price()),
            description: faker.commerce.productDescription(),
            image: `https://picsum.photos/200/200?random=${startIndex + i + 1}`,
        });
    }

    return products;
};
