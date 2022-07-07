function togglePokemonList(id) {
    if(document.getElementsByClassName("row pokemon-row")[id].style.display!="flex")
        document.getElementsByClassName("row pokemon-row")[id].style.display = "flex";
    else
    document.getElementsByClassName("row pokemon-row")[id].style.display = "none";
}
