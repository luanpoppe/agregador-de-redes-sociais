import request from "supertest";
import { app } from "../../app";
import { User } from "../../models/users.model";
import { prisma } from "../../prisma";
import { CreateChannelBody } from "../../models/channels.model";

describe("Cenários de criação de usuário", () => {
  const emailValido = "email_valido@gmail.com";

  beforeAll(async () => {
    const user: User = {
      email: emailValido,
      name: "Nome válido",
      password: "senhaValida",
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

  beforeAll(async () => {
    await prisma.channels.delete({
      where: {
        channelId: "@mikannn",
      },
    });
  });

  it("Cenário de sucesso", async () => {
    const body: CreateChannelBody = {
      platform: "youtube",
      channelId: "@mikannn",
    };
    const response = await request(app).post("/channel").send(body);
    console.log("response.body: ", response.body);
    expect(response.statusCode).toBe(201);
    expect(typeof response.body.id).toBe("number");

    expect(response.body).toEqual(
      expect.objectContaining({
        channelId: "@mikannn",
        name: "mikannn",
        profilePicture:
          "https://yt3.googleusercontent.com/ytc/AIdro_mTRSC-qE7GuhlXlDHe6lttQS1mBjoVoiMkUS79g8Wn3Q=s160-c-k-c0x00ffffff-no-rj",
      })
    );
  }, 30000);
});
