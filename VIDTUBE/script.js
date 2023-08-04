const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');

menuIcon.onclick = function ()
{
    sidebar.classList.toggle('small-sidebar');
    container.classList.toggle('large-container');
}