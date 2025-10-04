function protect() {
    let inputPswd = document.getElementById("validate")
                                .value;
        let correctPswd = "KikkaNaiset";
        if (inputPswd === correctPswd) {
            document.getElementById("container")
                .style.display = "block";
            document.getElementById("login")
                .style.display = "none";
        } else {
            alert("Väärä salasana!");
        }
}