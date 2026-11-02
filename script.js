
const search = document.getElementById("search");
const players = document.querySelectorAll(".player");

search.addEventListener("input", function() {
    const value = search.value.toLowerCase();

    players.forEach(player => {
        const name = player.querySelector("h3")
            .textContent.toLowerCase();

        player.style.display = name.includes(value)
            ? "block"
            : "none";
    });
});

players.forEach(player => {
    player.addEventListener("click", function() {
        const name = player.querySelector("h3").textContent;
        const rating = player.querySelector("p").textContent;

        alert("Futbolchi: " + name +
              "\nReyting: " + rating);
    });
});
