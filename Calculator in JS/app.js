function getValue(e) {
    document.getElementById('getInp').value += e
}

function equal() {
    var getInp = document.getElementById('getInp')
    getInp.value = eval(getInp.value)
}

function clrall() {
    document.getElementById('getInp').value = ' '
}

function del() {
    var del = document.getElementById('getInp').value
    del = del.slice(0, -1)
    document.getElementById('getInp').value = del
}

function mod(g) {
    document.getElementById('getInp').value += '%'
}
