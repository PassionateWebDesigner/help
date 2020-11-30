var myvar;
function myFunction(){
    myvar = setTimeout(showPage,3500);
}
function showPage(){
    document.getElementById("loader").style.display="none";
    document.getElementById("myDiv").style.display = "block";
}