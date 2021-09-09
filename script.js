const dropMenu = document.getElementsByClassName("button")[0];



const dropTheMenu = () => {
    document.getElementById("myDropdown").classList.toggle("show");
}

dropMenu.addEventListener("click", dropTheMenu);



//w3Schools Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 

