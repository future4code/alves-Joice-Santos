"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatorMock = void 0;
const Product = require("../../src/models/Products");
class AuthenticatorMock {
    constructor() {
        this.generateToken = () => {
            return "token-mock-normal";
        } 
    }
}
exports.AuthenticatorMock = AuthenticatorMock;
//# sourceMappingURL=AuthenticatorMock.js.map