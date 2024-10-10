function openFilter() {
    let filterBox = document.querySelector(".main-filter");
    let body = document.body;
    anime({
        targets: filterBox,
        left: ["-100%", 0],
        opacity: [0, 1],
        duration: 450,
        easing: "easeInOutExpo",
        begin: function () {
            console.log("Animation started => open filter <=");
            body.style.overflow = "hidden";
            filterBox.style.display = "block";
        },
    });
}

function closeFilter() {
    let filterBox = document.querySelector(".main-filter");
    let body = document.body;
    anime({
        targets: filterBox,
        left: [0, "-100"],
        opacity: [1, 0],
        duration: 450,
        easing: "easeInOutExpo",
        complete: function () {
            console.log("Animation Started =>  close filter <=");
            body.style.overflow = "auto";
            filterBox.style.display = "none";
        },
    });
}

function openCustomSelect(element) {
    var selectOptions = element.nextElementSibling;

    if (selectOptions.style.display !== 'none') {
        anime({
            targets: selectOptions,
            translateY: "10px",
            opacity: 0,
            duration: 100,
            easing: "easeInOutQuad",
            complete: function () {
                selectOptions.style.display = "none";
                console.log("Closed current select");
            },
        });
    } else {
        var allSelectOptions = document.querySelectorAll('.custom-select-options');

        allSelectOptions.forEach(function (option) {
            if (option !== selectOptions) {
                anime({
                    targets: option,
                    translateY: "10px",
                    opacity: 0,
                    duration: 100,
                    easing: "easeInOutQuad",
                    complete: function () {
                        option.style.display = "none";
                        console.log("Closed other select");
                    },
                });
            }
        });

        anime({
            targets: selectOptions,
            translateY: 0,
            opacity: 1,
            duration: 100,
            easing: "easeInOutQuad",
            begin: function () {
                selectOptions.style.display = "block";
                console.log("Opened current select");
            },
        });
    }
}