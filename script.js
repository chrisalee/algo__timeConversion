function timeConversion(s) {
    // Write your code here
    if (s.indexOf('PM') > -1) {
        const time = s.slice(0,8).split(':');
        if (time[0] == 12) { 
            time[0] = '12';
            console.log(time.join(':'));
            return time.join(':');;
        } else { 
            time[0] = Number(time[0]) + 12;
            return time.join(':');;
        }
    } else {
       const time = s.slice(0,8).split(':');
       if (time[0] == 12) {
            time[0] = '00';
            console.log(time.join(':'));
            return time.join(':');;
        } else {
            console.log(time.join(':'));
            return time.join(':');;
        }
    }
}


///////////////////////////////////////////  another way of doing it

function processData(input) {
    var hours = parseInt(input.substring(0, input.indexOf(':')));
    var minutes = parseInt(input.substring(input.indexOf(':') + 1, input.lastIndexOf(':')));
    var seconds = parseInt(input.substring(input.lastIndexOf(':') + 1, input.lastIndexOf(':') + 3));
    var newHours;
    if(hours === 12) {
        newHours = 0;
    } else {
        newHours = hours;
    }
    var shift;
    if(input.toLowerCase().indexOf('pm') > -1) {
        shift = 12;
    } else {
        shift = 0;
    }
 
    var formatedHours = format((newHours + shift).toString());
    var formatedMinutes = format(minutes.toString());
    var formatedSeconds = format(seconds.toString());
 
    console.log(formatedHours + ":" + formatedMinutes + ":" + formatedSeconds);
 
    function format(numString) {
        if(numString.length === 1) {
            return "0" + numString;
        }
        return numString;
    }
}
 
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});
 
process.stdin.on("end", function () {
    processData(_input);
});
