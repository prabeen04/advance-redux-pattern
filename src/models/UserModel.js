class User {
    constructor(obj) {
        this.id = obj.id;
        this.firstName = obj.firstName;
        this.middleName = obj.middleName;
        this.lastName = obj.lastName;
    }

    getFullName() {
        return `${this.firstName || ''} ${this.middleName || ''} ${this.lastName || ''} `
    }

    static from(data) {
        return new User({
            id: data.id,
            firstName: data.firstName,
            middleName: data.middleName,
            lastName: data.lastName
        })
    }

    static fromAll(data) {
        return data.map(d => User.from(d))
    }
}
export default User;