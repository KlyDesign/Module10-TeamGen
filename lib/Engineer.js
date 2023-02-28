const  Employee =  require ( './Employee' ) ;

class Engineer extends Employee {


    constructor (name, id, email, github  )

    //addtional github parameter
     {
        super (name, id,  email) ;
        this.github = github ;
    }
    //two functions  specified in criteria
    getGithub () {
        return this.github ;
    }
    getRole () {
        return "Engineer" ;
    }


}

module.exports = Engineer ;