
var shows = [
    {
        schoolId: "Miami University",
        showName: "Miami Gallop",
        location: "Oxford, Oh",
        date: "11/27/2020"
    },
    {
        schoolId: "Ohio University",
        showName: "OU Nei Show",
        location: "Athens, Oh",
        date: "11/15/2020"
    }
]


function buildShowTable(){

    var table = document.getElementById("table"); 

    for(let i = 0; i < shows.length; i++){
        addRow(shows[i].showName, shows[i].schoolId, shows[i].location, shows[i].date)
    }
}


function addShow(){
    var newShow = {
        schoolId: document.getElementById("rSchoolId").value,
        showName: document.getElementById("rShowName").value,
        location: document.getElementById("rLocation").value,
        date: document.getElementById("rDate").value
    }
    var row = document.createElement("tr");

    for(let i = 0; i < shows.length; i++){
        if(newShow.schoolId == shows[i].schoolId){
           let result = confirm('Another show for this Host is already registered, do you wish to continue?')
           if(result){
               shows.push(newShow)
               alert("Show was added!")
               addRow(newShow.showName, newShow.schoolId, newShow.location, newShow.date)
               console.log(shows)
               return
           } else{
               return
           }
        }
    }
    shows.push(newShow)
    alert("Show was added!")
    addRow(newShow.showName, newShow.schoolId, newShow.location, newShow.date)
    console.log(shows)
    return
}


function addRow(showIn, hostIn, locationIn, dateIn){
    var table = document.getElementById("table"); 
    var row = document.createElement("tr");
    var show = document.createElement("td");
    var host = document.createElement("td");
    var location = document.createElement("td");
    var date = document.createElement("td");

    show.innerHTML = showIn;
    host.innerHTML = hostIn;
    location.innerHTML = locationIn;
    date.innerHTML = dateIn;

    row.appendChild(show);
    row.appendChild(host);
    row.appendChild(location);
    row.appendChild(date);
    table.children[0].appendChild(row);
}


