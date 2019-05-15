class User {
    constructor(build) {
        this.name = build.name;
        this.lastName = build.lastName;
        this.email = build.email;
        this.tequilas = build.tequilas;
    }

    static get Builder() {
        class Builder {
            constructor(name, lastName, email, tequilas) {
                this.name = name;
                this.lastName = lastName;
                this.email = email;
                this.tequilas = tequilas;
            }

            build() {
                return new User(this);
            }
        }

        return Builder;
    }
}

module.exports = User