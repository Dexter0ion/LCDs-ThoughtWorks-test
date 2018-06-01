// lcd.test.js
var assert = require('assert');
var lcd = require('../js/lcd.js');


describe('输出单个数字测试', function () {
    it('输入0返回LCD形式0', function () {
        lcd.lcd_init();
        assert.equal(lcd.lcd_num(0), ' _ \n| |\n|_|');
    });

    it('输入1返回LCD形式1', function () {
        lcd.lcd_init();
        assert.equal(lcd.lcd_num(1), '   \n  |\n  |');
    });
});

describe('输出多数字测试', function () {
    it('输入910返回LCD形式0', function () {
        lcd.lcd_init();
        lcd.lcd_in('910');
        assert.equal(lcd.lcd_display(), ' _ \n|_|\n  |\n   \n  |\n  |\n _ \n| |\n|_|');
        lcd.lcd_out_clear();
    });

    it('输入2140返回LCD形式2140', function () {
        lcd.lcd_init();
        lcd.lcd_in('2140');
        assert.equal(lcd.lcd_display(), ' _ \n _|\n|_ \n   \n  |\n  |\n   \n|_|\n  |\n _ \n| |\n|_|');
        lcd.lcd_out_clear();
    });
});