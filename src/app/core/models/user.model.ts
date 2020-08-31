export class User {
    constructor(
        private id: string, 
        private email: string, 
        private _token: string, 
        private _tokenExpirationDate: Date,
        private kind: string
        ) {}

    get token() {
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
            return null;
        }
        return this._token;
    }
}