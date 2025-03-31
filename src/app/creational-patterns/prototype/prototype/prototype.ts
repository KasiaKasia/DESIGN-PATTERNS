export interface Cloneable<T> {
    clone(): T;
  }
  
  export class Address implements Cloneable<Address> {
    constructor(
      private city: string, 
      private street: string) {}
  
    clone(): Address {
      return Object.create(this);
  
      /*
      An object can also be created in this way:
       return new Address(this.city, this.street);
      */
    }
    getCity(): string {
      return this.city;
    }
  
    getStreet(): string {
      return this.street;
    }
  }
  export class User implements Cloneable<User> {
    constructor(
      private name: string,
      private age: number,
      private address: Address
    ) {}
  
    clone(): User {
      return Object.create(this); 
      /*
     An object can also be created in this way:
     return new User(
       this.name,
       this.age,
       this.address.clone() 
     );
     */
    }
  
    getName(): string {
      return this.name;
    }
  
    getAge(): number {
      return this.age;
    }
  
    getAddress(): Address {
      return this.address;
    }
  } 
   