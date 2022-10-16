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
exports.UserDatabaseMock = void 0;
const User_1 = require("../../src/models/User");
const BaseDatabase_1 = require("../../src/database/BaseDatabase");
class UserDatabaseMock extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.toUserDBModel = (user) => {
            const userDB = {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole()
            };
            return userDB;
        };
        this.findByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            switch (email) {
                case "usermock@gmail.com":
                    const normalUser = {
                        id: "id-mock",
                        name: "User Mock",
                        email: "usermock@gmail.com",
                        password: "hash-mock",
                        role: User_1.USER_ROLES.NORMAL
                    };
                    return normalUser;
                case "astrodev@gmail.com":
                    const adminUser = {
                        id: "id-mock",
                        name: "Astrodev",
                        email: "astrodev@gmail.com",
                        password: "hash-bananinha",
                        role: User_1.USER_ROLES.ADMIN
                    };
                    return adminUser;
                default:
                    return undefined;
            }
        });
        this.createUser = (user) => __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.UserDatabaseMock = UserDatabaseMock;
UserDatabaseMock.TABLE_USERS = "Labook_Users";
//# sourceMappingURL=UserDatabaseMock.js.map