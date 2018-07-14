


document.querySelector('.menuToggle').addEventListener('click', function () {
    document.querySelector('.nav').classList.toggle('navSlide');
});
document.querySelector('.dropProd').addEventListener('click', function () {
    document.querySelector('.listProd').classList.toggle('listProd-change');
    document.querySelector('.ProD').classList.toggle('arrowDown');
    document.querySelector('.ProD').classList.toggle('arrowUp');

});
document.querySelector('.dropServ').addEventListener('click', function () {
    document.querySelector('.listServ').classList.toggle('listServe-change');
    document.querySelector('.Serv').classList.toggle('arrowDown');
    document.querySelector('.Serv').classList.toggle('arrowUp');
});

document.querySelector('.quot__link--icon').addEventListener('click', function () {
    document.querySelector('.quot').classList.toggle('quot-right');
});

document.querySelector('.sample__link--icon').addEventListener('click', function () {
    document.querySelector('.sample').classList.toggle('sample-right');
});