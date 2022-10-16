import { ITokenPayload } from "../../src/services/Authenticator"

export class AuthenticatorMock {
    public generateToken = (payload: ITokenPayload): string => {
        return "token-mock-normal"
        
    }

}