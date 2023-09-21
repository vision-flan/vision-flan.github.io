readTextFile("./tasks.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
    //for (var x in data)
    //console.log(data.data["0"].img_path)

    var table = document.getElementById("bibtex_table");

    for (x in data.data) {
        var child = document.createElement('tr');
        // child.innerHTML = "<td><p>" + data.data[x].name + "</p></td> <td><a href=\"" + data.data[x].url + "\">Link</a></td> <td><p style=\"font-size:10px;\">" + data.data[x].bibtex + "</p></td>";
        child.innerHTML = "<td><p>" + data.data[x].task_name + "</p></td> <td><p>" + data.data[x].prompt + "</p></td> <td><p>" + data.data[x].target + "</p></td> <td><img src=\"" + data.data[x].img_path + "\" style=\"width:250px;\"></td>";

        table.appendChild(child);
        console.log("added");
    }
    document.getElementById("num_tasks").textContent = data.data.length;
});

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}