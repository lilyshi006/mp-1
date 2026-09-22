function addition() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);

    let result = first + second;

    document.getElementById("output").innerHTML = String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function subtraction() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);

    let result = first - second;

    document.getElementById("output").innerHTML = String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function multiplication() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);

    let result = first * second;

    document.getElementById("output").innerHTML = String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function division() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);

    let result = first / second;

    document.getElementById("output").innerHTML = String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function power() {
    let first = Number(document.getElementById("first-number").value);
    let second = Number(document.getElementById("second-number").value);

    let result = 1;

    for (let i = 0; i < second; i++) {
        result = result * first;
    }

    document.getElementById("output").innerHTML = String(result);

    if (result < 0) {
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}

function clearCalculator() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}