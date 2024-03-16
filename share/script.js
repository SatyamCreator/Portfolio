document.addEventListener('DOMContentLoaded', function () {
    var menuToggleBtns = document.querySelectorAll('.menu-toggle-btn');

    menuToggleBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var menuToggleBtns = document.querySelectorAll('.menu-toggle-btn');
            var menuLists = document.querySelectorAll('.menu-list');

            menuToggleBtns.forEach(function (btn) {
                btn.classList.toggle("effect");
            });

            menuLists.forEach(function (list) {
                list.classList.toggle("effect");
            });
        });
    });
});
