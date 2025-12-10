const sub_theme = document.getElementsByClassName("sub_theme");
const toggle_window = document.getElementsByClassName("toggle_window");

sub_theme[0].addEventListener("click",function(){
    toggle_window[0].style.display = 'block';
});