class Engineer {
    constructor(name,id,email,github,role){
        this.name=name;
        this.id=id;
        this.email=email;
        this.github=github;
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


module.exports = Engineer;