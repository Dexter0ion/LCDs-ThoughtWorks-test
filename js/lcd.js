var readline = require('readline');


var LCDs = new Array();
var LCDs_out = new Array();

function lcd_init() {
    LCDs.push(' _ \n| |\n|_|'); //LCD -0
    LCDs.push('   \n  |\n  |'); //LCD -1
    LCDs.push(' _ \n _|\n|_ '); //LCD -2
    LCDs.push(' _ \n _|\n _|'); //LCD -3
    LCDs.push('   \n|_|\n  |'); //LCD -4
    LCDs.push(' _ \n|_ \n _|'); //LCD -5
    LCDs.push(' _ \n|_ \n|_|'); //LCD -6
    LCDs.push(' _ \n  |\n  |'); //LCD -7
    LCDs.push(' _ \n|_|\n|_|'); //LCD -8
    LCDs.push(' _ \n|_|\n  |'); //LCD -9
};

function lcd_num(num) {
    return LCDs[num];
}

function lcd_in(arr) {
    for (num in arr) {
        LCDs_out.push(LCDs[arr[num]]);
    }
}

function lcd_display() {
    console.log(LCDs_out.join("\n"));
    return (LCDs_out.join("\n"));
}

function lcd_out_clear() {
    LCDs_out = [];
}

function stdin() {
    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('INPUT NUMBER:');
    rl.prompt();
    rl.on('line', (line) => {
        lcd_in(line.trim());
        lcd_display();
        lcd_out_clear();
        rl.prompt();
    });

    rl.on('close', function () {
        process.exit(0);
    });

}

lcd_init();
stdin();

module.exports = {
    lcd_init,
    lcd_num,
    lcd_in,
    lcd_display,
    lcd_out_clear
}