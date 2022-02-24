// encapsulation
class Signup {
    constructor(firstName, lastName, age, email, password, confirmPassword) {
        this.firstname       = firstName;
        this.lastName        = lastName;
        this.age             = age;
        this.email           = email;
        this.password        = password;
        this.confirmPassword = confirmPassword;
    }

    checkAge() {
        if (this.age < 18) {
            alert('You must be 18 years or older to proceed');
        }
    }

    checkPassword() {
        if (this.password !== this.confirmPassword) {
            alert('These passowrds do not match')
        }
    }
    
    static greetingUser () {
        alert(`Welcome, ${this.firstname}`);
    }


}

//inheritance
class User extends Signup {
    constructor(firstName, lastName, age, location) {
        super(firstName, lastName, age);
            this.location = location;
    }

    displayInfo() {
        console.log(`${this.firstname} ${this.lastName}`);
        console.log(this.age);
        console.log(this.email);
    }

    findHome() {
        console.log('You are from: ' + this.location);
    }
}

const jordan = new User('Jordan', 'Norwood', 24, 'Flossmoor');
const sam    = new User('Sam', 'Washington', 27, 'Naperville');
User.greetingUser(sam);


