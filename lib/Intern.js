class Intern {
    constructor(name,id,email,school,role){
        this.name=name;
        this.id=id;
        this.email=email;
        this.school=school;
        this.role=role;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Intern;