import { app, sequelize } from "../express";
import request from "supertest";

describe("E2E test for product", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should list all product", async () => {
    const create = (name: string, price: number) =>
      request(app).post("/product").send({ name, price });
    expect((await create("Product 1", 10)).status).toBe(200);
    expect((await create("Product 2", 20)).status).toBe(200);

    const response = await request(app).get("/product").send();

    expect(response.status).toBe(200);
    expect(response.body.products.length).toBe(2);
    const product = response.body.products[0];
    expect(product.name).toBe("Product 1");
    expect(product.price).toBe(10);
    const product2 = response.body.products[1];
    expect(product2.name).toBe("Product 2");
    expect(product2.price).toBe(20);
  });
});
