var url = "https://api.sncf.com/v1/coverage/sncf/stop_points/stop_point:SNCF:87747477:Train/departures"
var err = ''
const myHeaders = new Headers();
myHeaders.append('Authorization', '1f58b715-fe32-4bbf-839e-f566708921fa');

btn.onclick = () => {
    output.textContent = 'Search in progress...'
    fetch(url,{method: 'GET', headers: myHeaders,})
    .then(rep => rep.json())
    .then(SNCF_data => {
        //console.log(SNCF_data)
        console.log(SNCF_data.departures[0])
        document.getElementById("Direction").innerHTML=SNCF_data.departures[0].display_informations.direction
        let dep_time = SNCF_data.departures[0].stop_date_time.departure_date_time
        let dep_hour = dep_time.slice(dep_time.indexOf('T')+1,dep_time.indexOf('T')+3)
        let dep_minute = dep_time.slice(dep_time.indexOf('T')+3,dep_time.indexOf('T')+5)
        let dep_sec = dep_time.slice(dep_time.indexOf('T')+5,dep_time.indexOf('T')+7)
        document.getElementById("Scheduled_time").innerHTML=dep_hour+"h "+dep_minute+"' "+dep_sec+'"'
    })
    .then(output.textContent="Terminated")
}