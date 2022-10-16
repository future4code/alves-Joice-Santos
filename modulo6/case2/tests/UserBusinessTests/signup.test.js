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
const AuthenticatorMock_1 = require(".././mocks/AuthenticatorMock");
const HashManagerMock_1 = require(".././mocks/HashManagerMock");
const IdGeneratorMock_1 = require(".././mocks/IdGeneratorMock");
const UserDatabaseMock_1 = require(".././mocks/UserDatabaseMock");
describe("Testando o método signup da UserBusiness", () => {
    const userBusiness = new UserBusiness_1.UserBusiness(new UserDatabaseMock_1.UserDatabaseMock(), new IdGeneratorMock_1.IdGeneratorMock(), new HashManagerMock_1.HashManagerMock(), new AuthenticatorMock_1.AuthenticatorMock());
    test("Um token é retornado quando o cadastro é bem-sucedido", () => __awaiter(void 0, void 0, void 0, function* () {
        const input = {
            email: "teste@gmail.com",
            name: "Teste",
            password: "teste123"
        };
        const response = yield userBusiness.signup(input);
        expect(response.message).toBe("Cadastro realizado com sucesso");
        expect(response.token).toBe("token-mock-normal");
    }));
});
//# sourceMappingURL=signup.test.js.map