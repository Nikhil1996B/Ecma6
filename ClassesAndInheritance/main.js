// Classes and Inheritance in ES6 -- 2015

class User {
    constructor(name, email, password){
        this.name = name;
        this.email = name;
        this.password = password;
    }

    register(){
        console.log(this.name + "User registered");
    }

    static countUsers() {
        console.log("There are 100 Users");
    }
}

// /// Instantiate a new user object
let nik = new User("Nikhil","nik@email.com","12345");
// nik.register();

// User.countUsers();
    // nik.countUsers();  ---> static method cannot be accessed through instanciated object of prototype class

/// inheritance concept in ES6

class Package extends User{
    constructor(name, email, password, packageId){
        super(name, password, packageId);
        this.packageId = packageId;
    }

    getuser(){
        console.log(this.name + " User has package: " + this.packageId);
    }

}

let obj = new Package("New","email.com","123","1");

// obj.register(); ---> Errorneous object
obj.getuser();
