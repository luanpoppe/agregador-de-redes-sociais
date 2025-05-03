import request from "supertest";
import { app } from "../../app";
import { LoginBody, User } from "../../models/users.model";
import { prisma } from "../../prisma";

describe("Cenários de criação de usuário", () => {
  const emailValido = "email_valido@gmail.com";
  afterEach(async () => {
    await prisma.users.delete({
      where: {
        email: emailValido,
      },
    });
  });

  it("Cenário de sucesso", async () => {
    const user: User = {
      email: emailValido,
      name: "Nome válido",
      password: "senhaValida",
    };
    const response = await request(app).post("/users").send(user);
    console.log("response.body: ", response.body);
    expect(response.statusCode).toBe(201);
  });
});

describe("Cenários de login", () => {
  const emailValido = "email_valido@gmail.com";
  const senha = "senhaValida";
  beforeAll(async () => {
    const user: User = {
      email: emailValido,
      name: "Nome válido",
      password: senha,
    };
    await request(app).post("/users").send(user);
  });
  afterAll(async () => {
    await prisma.users.delete({
      where: {
        email: emailValido,
      },
    });
  });

  it("Cenário de sucesso", async () => {
    const login: LoginBody = {
      email: emailValido,
      password: senha,
    };
    const res = await request(app).post("/login").send(login);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("authToken");
    expect(res.body).toHaveProperty("refreshToken");
  });

  it("Cenário senha inválida", async () => {
    const login: LoginBody = {
      email: emailValido,
      password: senha + "errado",
    };
    const res = await request(app).post("/login").send(login);
    expect(res.status).toBe(401);
    expect(res.body).toEqual({ error: "Not allowed" });
  });

  it("APAGAR - TEMPORÁRIO", async () => {
    const login: LoginBody = {
      email: emailValido,
      password: senha,
    };
    const resLogin = await request(app).post("/login").send(login);
    const res = await request(app)
      .get("/posts")
      .auth(resLogin.body.authToken, { type: "bearer" });
    expect(res.status).toBe(200);
  });
});
