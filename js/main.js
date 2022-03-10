var users = {
    "Akmal": {
        name: "Akmal",
        surname: "O'ktamov",
        age: 27,
        salary: 800
    },

    "Oybek": {
        name: "Oybek",
        surname: "sattorov",
        age: 36,
        salary: 1500
    },

    "Umid": {
        name: "Umid",
        surname: "Abdushukurov",
        age: 21,
        salary: 400
    }
}



function avarageAge(object) {
    var summ = 0, count = 0;
    for (var key in object) {
        count++;
        summ += object[key].age;
    }
    return summ / count;
}


function sumSalary(object) {
    var summ = 0;
    for (var key in object) {
        summ += object[key].salary;
    }
    return summ;
}


console.log(sumSalary(users));
console.log(avarageAge(users));