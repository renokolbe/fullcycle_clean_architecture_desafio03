import CreateCustomerUseCase from "./create.customer.usecase";

const input = {
    name: "John",
    address: {
        street: "Rua 1",
        number: 123,
        zip: "01001-001",
        city: "Sao Paulo",
    },
};

const MOckRepository = () => {
    return {
        find: jest.fn(),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    };
};

describe("Unit Test create customer use case", () => {

    it("Should create a customer", async () => {

        const customerRepository = MOckRepository();
        const customerCreateUseCase = new CreateCustomerUseCase(customerRepository);

        const output = await customerCreateUseCase.execute(input);

        expect(output).toEqual({
            id: expect.any(String),
            name: input.name,
            address: {
                street: input.address.street,
                number: input.address.number,
                zip: input.address.zip,
                city: input.address.city
            },
        });

    });

    it("Should thrown an error when name is missing", async () => {

        const customerRepository = MOckRepository();
        const customerCreateUseCase = new CreateCustomerUseCase(customerRepository);

        input.name = "";

        await expect(customerCreateUseCase.execute(input)).rejects.toThrow("Name is required");

    });

    it("Should thrown an error when street is missing", async () => {

        const customerRepository = MOckRepository();
        const customerCreateUseCase = new CreateCustomerUseCase(customerRepository);

        input.address.street = "";

        await expect(customerCreateUseCase.execute(input)).rejects.toThrow("Street is required");

    });

});