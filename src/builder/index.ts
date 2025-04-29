import UserBuilder from "./user_builder";

function main() {
    const userBuilder = new UserBuilder();
    const user = userBuilder
        .setName("John Doe")
        .setEmail("john.doe@email.com")
        .setAge(30)
        .build();

    console.log(user.toString());
}

main();