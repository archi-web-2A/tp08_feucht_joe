export class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly email: string,
        public readonly phoneNumber: string,
        public readonly gender: string,
        public readonly birthDate: string,
        public readonly location: string,
        public readonly city: string,
        public readonly postalCode: string,
        public readonly password: string
    ) {}
}