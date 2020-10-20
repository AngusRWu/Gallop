


var schools = [
    {
        schoolId: "Miami",
        location: "Oxford, Oh",
        description: "Nice"
    }
]



function validSchool(){
    var schoolId = document.getElementById("schoolId").value
    var location = document.getElementById("location").value

    for(let i = 0; i < schools.length; i++){
        if(schoolId == schools[i].schoolId && location == schools[i].location){
            console.log(schoolId + " is already registered")
        }

    }
}



function registerSchool(){
    var registeredSchoolId = document.getElementById("rSchoolId").value
    var registeredLocation = document.getElementById("rLocation").value
    var registeredDescription = document.getElementById("rDescription").value
    var newSchool = {
        schoolId: registeredSchoolId,
        location: registeredLocation,
        description: registeredDescription
    }

    for(var i = 0; i < schools.length; i++){
        if(registeredSchoolId == schools[i].schoolId){
            alert("This school is already registered")
            return
        }
    }
    var temp = new SchoolStat(registeredSchoolId,registeredLocation,registeredDescription)
    schools.push(newSchool)
    console.log(schools)
}


class SchoolStat{

    SchoolStat(schoolId, location, description){
        this.schoolId = schoolId;
        this.location = location;
        this.description = description;
    }

    getSchoolId(){
        return this.schoolId;
    }

    getLocationId(){
        return this.location;
    }
    getDescription(){
        return this.description;
    }


}


