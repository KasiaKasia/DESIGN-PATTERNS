export interface Cloneable<T> {
    clone(): T;
}

export class Address implements Cloneable<Address> {
    constructor(
        private city: string,
        private street: string) { }

    clone(): Address {
        return new Address(this.city, this.street);
    }

    getCity(): string {
        return this.city;
    }
    setCity(city: string) {
        this.city = city;
    }

    getStreet(): string {
        return this.street;
    }
    setStreet(street: string) {
        this.street = street;
    }
}
export class User implements Cloneable<User> {
    constructor(
        private name: string,
        private age: number,
        private address: Address
    ) { }

    clone(): User {
        return new User(
            this.name,
            this.age,
            this.address.clone()
        );
    }

    getName(): string {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }
    setAge(age: number) {
        this.age = age;
    }
    
    getAddress(): Address {
        return this.address;
    }
    setAddress(address: Address) {
        this.address = address;
    }
}
