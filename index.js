class Date {
  constructor(year) {
    this.year = year;
  }
  get fullDate() {
    return ` ${this.year} `;
  }
}
let today = new Date(2022);
console.log(today.fullDate);

class Student {
  constructor(name, surname, yearOfAdmission) {
    this.name = name;
    this.surname = surname;
    this.yearOfAdmission = yearOfAdmission;
  }
  get fullName() {
    return `Имя студента ${this.name} , фамилия студента ${this.surname}`;
  }
  get Course() {
    return today.fullDate - this.yearOfAdmission + " курс";
  }
}

Student.prototype = Date;
let Juli = new Student("Juli", "Dmitruk", 2020);
console.log(Juli.name);
console.log(Juli.surname);
console.log(Juli.yearOfAdmission);
console.log(Juli.fullName);

console.log(Juli.Course);
