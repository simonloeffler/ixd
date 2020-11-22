window.addEventListener("load", function () {
    var state = 0;
    var artyom = new Artyom();

    var commands = [
        {
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                artyom.say("Neue Aufgabe wird erstellt: " + wildcard);
            }
        },
        {
            indexes: ["Hallo","Hey"], // These spoken words will trigger the execution of the command
            smart: false,
            action: function(){ // Action to be executed when a index match with spoken word
                console.log("Hey, wie geht es dir?");
                artyom.say("Hey, wie geht es dir?");
            }
        }
    ];

    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE-Male",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 5000);
    }

    function greeting() {
        artyom.say("Hallo, ich bin CARL, dein neuer Sprachassistent.");
    }

    artyom.addCommands(commands);
    startContinuousArtyom();

    document.getElementById("getIn").onclick = greeting;
});
//# sourceMappingURL=playgroud-artyom-script.js.map