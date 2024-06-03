function programing(callback) {
    console.log("I started studying Programming.");
    callback();
}

function frontend(callback) {
    console.log("Studying Frontend.");
    callback();
}

function html(callback) {
    console.log("Studying HTML.");
    callback();
}

function css(callback) {
    console.log("Studying CSS.");
    callback();
}

function tailwind(callback) {
    console.log("Studying Tailwind.");
    callback();
}

function frameworks(callback) {
    console.log("Studying Frameworks.");
    callback();
}

function react(callback) {
    console.log("Studying React.");
    callback();
}

function nextJS() {
    console.log("Studying Next JS.");
}

programming(function() {
    frontend(function() {
        html(function() {
            css(function() {
                tailwind(function() {
                    frameworks(function() {
                        react(function() {
                            nextJS();
                        });
                    });
                });
            });
        });
    });
});