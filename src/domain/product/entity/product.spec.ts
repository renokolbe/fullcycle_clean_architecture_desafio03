import Product from "./product";

describe("Product unit tests", () => {

    it("Should throw error when id is empty", () => {
        expect(() => {
            let product = new Product("", "Product 1", 10);
        }).toThrowError("product: Id is required");
    });

    it("Should throw error when name is empty", () => {
        expect(() => {
            let product = new Product("1", "", 10);
        }).toThrowError("product: name is required");
    });

    it("Should throw error when price is less than 0", () => {
        expect(() => {
            let product = new Product("1", "1", -1);
        }).toThrowError("product: Price must be greater than zero");
    });

    it("Should throw error when id, name are empty and price is less then 0", () => {
        expect(() => {
            let customer = new Product("", "", -1)
        }).toThrowError("product: Id is required,product: name is required,product: Price must be greater than zero");
    });

    it("Should change name", () => {
            let product = new Product("1", "Name 1", 10);
            product.changeName("Name 2");
            expect(product.name).toBe("Name 2");
    });

    it("Should change price", () => {
        let product = new Product("1", "Name 1", 10);
        product.changePrice(20);
        expect(product.price).toBe(20);
});

})