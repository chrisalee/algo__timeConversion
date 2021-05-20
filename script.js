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
