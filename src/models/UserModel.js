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
}
export default User;