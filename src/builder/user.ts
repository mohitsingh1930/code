import UserBuilder from './user_builder';

class User {
    private name: string;
    private age: number;
    private email: string;
    private dateOfBirth: Date;

    constructor(builder: UserBuilder) {
        this.name = builder.name;
        this.age = builder.age;
        this.email = builder.email;
    }

    public toString(): string  {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}

export default User;