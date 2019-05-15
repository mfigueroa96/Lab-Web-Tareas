class Tequila {
    constructor(build) {
        this.name = build.name;
        this.alcohol_degrees = build.alcohol_degrees;
        this.purity = build.purity;
        this.date_of_release = build.date_of_release;
        this.distillation = build.distillation;
        this.year_of_distillation = build.year_of_distillation;
        this.place_of_distillation = build.place_of_distillation;
        this.serial_numbers = build.serial_numbers;
        this.uuid = build.uuid;
        this.provider= build.provider;
        this.uuidType = build.uuidType;
        this.provider_uuid = build.provider_uuid;
    }

    static get Builder() {
        class Builder {
            constructor(name, alcohol_degrees, purity, date_of_release, distillation, year_of_distillation, place_of_distillation, serial_numbers,uuid, provider, provider_uuid, uuidType) {
                this.name = name;
                this.alcohol_degrees = alcohol_degrees;
                this.purity = purity;
                this.date_of_release = date_of_release;
                this.distillation = distillation;
                this.year_of_distillation = year_of_distillation;
                this.place_of_distillation = place_of_distillation;
                this.uuid = uuid;
                this.provider= provider
                this.provider_uuid = provider_uuid
                this.uuidType = uuidType;
            }

            build() {
                return new Tequila(this);
            }
        }

        return Builder;
    }
}

module.exports = Tequila;