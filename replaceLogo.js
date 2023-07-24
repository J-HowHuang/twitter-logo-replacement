function replaceLogo() {
    var root = document.getElementById("react-root");
    console.log(root);
    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
        console.log("rendered!");
        var logo_div = document.getElementsByClassName("css-1dbjc4n r-dnmrzs r-1vvnge1");
        console.log(logo_div.length);
        if (logo_div.length){
            var svg = logo_div[0].getElementsByTagName("svg");
            const new_logo_div = document.createElement("div");
            new_logo_div.style.width = "50px";
            new_logo_div.style.height = "50px";
            new_logo_div.style.display = "flex";
            new_logo_div.style.justifyContent = "center";

            const new_logo_img = document.createElement("img");
            new_logo_img.src = "https://i.imgur.com/owO1EtJ.png";
            new_logo_img.style.objectFit = "contain";
            new_logo_img.width = "40";
            new_logo_img.height = "40";
            new_logo_img.style.margin = "auto";
            new_logo_div.appendChild(new_logo_img);
            svg[0].insertAdjacentElement("afterend", new_logo_div);
            svg[0].remove();
            observer.disconnect();
        }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(root, config);

}


replaceLogo();