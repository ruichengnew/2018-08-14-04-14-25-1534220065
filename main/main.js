module.exports = function main(numStr) {
    console.log("Debug Info");
    const firstLine = {
        1: "...",
        2: "._.",
        3: "._.",
        4: "...",
        5: "._.",
        6: "._.",
        7: "._.",
        8: "._.",
        9: "._.",
        0: "._."
    };
    const secondLine = {
        1: "..|",
        2: "._|",
        3: "._|",
        4: "|_|",
        5: "|_.",
        6: "|_.",
        7: "..|",
        8: "|_|",
        9: "|_|",
        0: "|.|"
    };
    const thirdLine = {
        1: "..|",
        2: "|_.",
        3: "._|",
        4: "..|",
        5: "._|",
        6: "|_|",
        7: "..|",
        8: "|_|",
        9: "..|",
        0: "|_|"
    };
    let firstLights = [];
    let secondLights = [];
    let thirdLights = [];
    for (let i = 0; i < numStr.length; i++) {
        let num = parseInt(numStr[i]);
        firstLights.push(firstLine[num]);
        secondLights.push(secondLine[num]);
        thirdLights.push(thirdLine[num]);
    }
    return (
        [
            firstLights.join(" "),
            secondLights.join(" "),
            thirdLights.join(" ")
        ].join("\n") + "\n"
    );
};
