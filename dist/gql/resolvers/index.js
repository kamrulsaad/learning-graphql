import { db } from "../../db.js";
export const resolvers = {
    Query: {
        products: () => db.products,
        product: (parent, args, context) => {
            const { productId } = args;
            const product = db.products.find((product) => product.id === productId);
            return product;
        },
        categories: () => db.categories,
        category: (parent, args, context) => {
            const { categoryId } = args;
            const category = db.categories.find((category) => category.id === categoryId);
            return category;
        },
    },
    Product: {
        category: (parent, args, context) => {
            const { categoryId } = parent;
            const categoryFound = db.categories.find((categoryItem) => categoryItem.id === categoryId);
            return categoryFound;
        },
        reviews: (parent, args, context) => {
            const { id } = parent;
            const result = db.reviews.filter((rv) => rv.productId === id);
            return result;
        },
    },
    Category: {
        products: (parent, args, context) => {
            const { id } = parent;
            return db.products.filter((pd) => pd.categoryId === id);
        },
    },
};
