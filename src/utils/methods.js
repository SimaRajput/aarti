export const getTracks = (item) => {
    var date = new Date();
    var day = date.getDay()
    if(day == 1){
        return item[0];
    }
    if(day == 2){
        return item[1];
    }
    if(day == 3){
        return item[2];
    }
    if(day == 4){
        return item[3];
    }
    if(day == 5){
        return item[4];
    }
    if(day == 6){
        return item[5];
    }
    if(day == 7){
        return item[6];
    }
}

