import User from './user'; 

class UserBuilder {
    name: string;
    email: string;
    age: number;

    setName(name: string): UserBuilder {
        this.name = name;
        return this;
    }

    setEmail(email: string): UserBuilder {
        this.email = email;
        return this;
    }

    setAge(age: number): UserBuilder {
        this.age = age;
        return this;
    }

    build(): User {
        return new User(this);
    }
}

export default UserBuilder;