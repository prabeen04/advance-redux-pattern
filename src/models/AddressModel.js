class Address {
    constructor(obj) {
        this.address1 = obj.address1;
        this.address2 = obj.address2;
        this.street = obj.street;
        this.city = obj.city;
        this.state = obj.state;
        this.country = obj.country;
        this.postalCode = obj.postalCode;
        this.latitude = obj.latitude;
        this.longitude = obj.longitudeF;
    }
    
    getFormattedAddress(){
    	return `${this.address1 || '' }, `${this.address2 || '' }, `${this.street || '' }, 
	${this.state || '' }, ${this.country || '' }`	`
    }


}
export default Address;
