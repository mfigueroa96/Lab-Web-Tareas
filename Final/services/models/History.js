class History {
    constructor(build) {
        this.serial_num = build.serial_num;
        this.date_of_purchase = build.date_of_purchase
    }

    static get Builder() {
        class Builder {
            constructor(serial_num, date_of_purchase) {
                this.serial_num = serial_num;
                this.date_of_purchase  = date_of_purchase ;
            }

            build() {
                return new History(this);
            }
        }

        return Builder;
    }
}

module.exports = History;