import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


export class Name {
  protected country: string = ''
  protected bankAccountNumber: string = ''

  getCountry() {
    return this.country
  }

  getBankAccountNumber() {
    return this.bankAccountNumber
  }
}

export class Country extends Name {
  constructor() {
    super()
  }

  getValueCuntry(value: string) {

    const firstTwoChars = value.substring(0, 2);
    const regex = /^[A-Za-z]{2}$/;

    if (regex.test(firstTwoChars)) {
      this.country = this.nameCoutry(firstTwoChars)
    } else {
      this.country = firstTwoChars
    }
    return this.country
  }

  nameCoutry(value: string) {

    switch (value.toUpperCase()) {
      case 'PL': {
        return this.country = 'Poland'
      }
      case 'US': {
        return this.country = 'United States'
      }
      case 'CZ': {
        return this.country = 'Czech Republic'
      }
      default: {
        return this.country = value
      }
    }
  }
}

export class BankAccountNumber extends Name {
  constructor() {
    super()
  }

  public getValueBankAccountNumber(value: string) {

    const numericChars = value.substring(2);
    const digits = numericChars.match(/\d+/g);
    if (digits) {
      this.bankAccountNumber = numericChars
    } else {
      this.bankAccountNumber = value
    }
    return this.bankAccountNumber
  }
}

export class NamerFactory {

  checkValue(entry: string) {

    const firstTwoChars = entry.substring(0, 2);
    const regex = /^[A-Za-z]{2}$/;
    if (regex.test(firstTwoChars)) { 
      const country = new Country().getValueCuntry(entry)
      return country
    } else {
      const bankAccountNumber = new BankAccountNumber().getValueBankAccountNumber(entry)
      return bankAccountNumber
    }
  }
}

@Component({
  selector: 'app-simple-factory',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simple-factory.component.html',
  styleUrl: './simple-factory.component.scss'
})
export class SimpleFactoryComponent extends NamerFactory {
  country = ''
  constructor() {
    super()
  }
  iban = ''
  checkBankNumber(event: string) {

    const namerFactory = new NamerFactory()
    this.country = namerFactory.checkValue(event)
  }
}
