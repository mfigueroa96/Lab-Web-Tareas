class User {
    constructor(build) {
        this.name = build.name;
        this.lastName = build.lastName;
        this.email = build.email;
    }

    static get Builder() {
        class Builder {
            constructor(name, lastName, email) {
                this.name = name;
                this.lastName = lastName;
                this.email = email;
            }

            build() {
                return new User(this);
            }
        }

        return Builder;
    }
}

module.exports = User