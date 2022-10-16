"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserBusiness_1 = require("../../src/business/UserBusiness");
const BaseError_1 = require("../../src/errors/BaseError");
const AuthenticatorMock_1 = require(".././mocks/AuthenticatorMock");
const HashManagerMock_1 = require(".././mocks/HashManagerMock");
const IdGeneratorMock_1 = require(".././mocks/IdGeneratorMock");
const UserDatabaseMock_1 = require(".././mocks/UserDatabaseMock");
describe("Testando o método login da UserBusiness", () => {
    const userBusiness = new UserBusiness_1.UserBusiness(new UserDatabaseMock_1.UserDatabaseMock(), new IdGeneratorMock_1.IdGeneratorMock(), new HashManagerMock_1.HashManagerMock(), new AuthenticatorMock_1.AuthenticatorMock());
    test("Um token é retornado quando o login é bem-sucedido", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        };
        const response = yield userBusiness.login(input);
        expect(response.message).toBe("Login realizado com sucesso");
        expect(response.token).toBe("token-mock-admin");
    }));
    test("Erro quando 'password' possuir menos de 6 caracteres", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const input = {
                email: "fulano@gmail.com",
                name: "Fulano",
                password: "123"
            };
            yield userBusiness.signup(input);
        }
        catch (error) {
            if (error instanceof BaseError_1.BaseError) {
                expect(error.statusCode).toBe(400);
                expect(error.message).toBe("Parâmetro 'password' inválido: mínimo de 6 caracteres");
            }
        }
    }));
    test("Erro quando 'password' for incorreto", () => __awaiter(void 0, void 0, void 0, function* () {
        expect.assertions(2);
        try {
            const input = {
                email: "astrodev@gmail.com",
                password: "bananinha123"
            };
            yield userBusiness.login(input);
        }
        catch (error) {
            if (error instanceof BaseError_1.BaseError) {
                expect(error.statusCode).toBe(401);
                expect(error.message).toBe("Password incorreto");
            }
        }
    }));
});
//# sourceMappingURL=login.test.js.map