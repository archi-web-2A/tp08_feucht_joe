import { User } from '../entities/User';

export class UserService {
    private users: User[] = [];
    private currentUser: User | null = null;

    constructor() {}

    setCurrentUser(user: User) {
        this.currentUser = user;
    }

    getCurrentUser(): User | null {
        return this.currentUser;
    }


    addUser(user: User): void {
        this.users.push(user);
    }

    getUserByEmail(email: string): User {
        return this.users.find(u => u.email === email);
    }

    getAllUsers(): User[] {
        return this.users;
    }

    updateUser(user: User): void {
        const index = this.users.findIndex(u => u.email === user.email);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    deleteUser(email: string): void {
        this.users = this.users.filter(u => u.email !== email);
    }

    isValidRegistration(user: User): boolean {
        return (
            user.firstName !== undefined && user.firstName.trim() !== '' &&
            user.lastName !== undefined && user.lastName.trim() !== '' &&
            user.email !== undefined && user.email.trim() !== '' &&
            user.phoneNumber !== undefined && user.phoneNumber.trim() !== '' &&
            user.gender !== undefined && user.gender.trim() !== '' &&
            user.birthDate !== undefined && user.birthDate.trim() !== '' &&
            user.location !== undefined && user.location.trim() !== '' &&
            user.city !== undefined && user.city.trim() !== '' &&
            user.postalCode !== undefined && user.postalCode.trim() !== '' &&
            user.password !== undefined && user.password.trim() !== ''
        );
    }

    isValidLogin(email: string, password: string): boolean {
        return !!(email && password);
    }
}
