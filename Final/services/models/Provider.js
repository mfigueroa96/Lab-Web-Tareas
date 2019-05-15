class Provider {
    constructor(build) {
        this.brand = build.brand;
        this.contact_mail = build.contact_mail;
        this.contact_phone = build.contact_phone;
        this.tequilas = build.tequilas;
        this.uuid = build.uuid;
    }

    static get Builder() {
        class Builder {
            constructor(brand, contact_mail, contact_phone, tequilas, uuid) {
                this.brand = brand;
                this.contact_mail = contact_mail;
                this.contact_phone = contact_phone;
                this.tequilas = tequilas;
                this.uuid = uuid;
            }

            build() {
                return new Provider(this);
            }
        }

        return Builder
    }
}

module.exports = Provider;