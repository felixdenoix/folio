var Rand_grad = function () {
    // inspired from minimamente jsfiddle
    // http://jsfiddle.net/minimamente/o0fh1o0a/
    this.bgcolor = ["22A7F0", "8E44AD", "AEA8D3", "F62459", "DB0A5B", "D64541", "D2527F", "2C3E50", "1E8BC3", "87D37C", "4ECDC4", "3FC380", "E87E04", "F9690E", "F9BF3B"];
};

Rand_grad.prototype.generateGradient = function( illu ) {
    var self = this;
    var rand1 = self.bgcolor[Math.floor(Math.random() * self.bgcolor.length)];
    var rand2 = self.bgcolor[Math.floor(Math.random() * self.bgcolor.length)];
    while ( rand1 == rand2 ){
        rand2 = self.bgcolor[Math.floor(Math.random() * self.bgcolor.length)];
    }
    var grad = illu;

    grad.css('background-color', self.convertHex(rand1, 40));
    grad.css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0%," + self.convertHex(rand1, 40) + "), color-stop(100%," + self.convertHex(rand2, 40) + "))");
    grad.css("background-image", "-webkit-linear-gradient(top,  " + self.convertHex(rand1, 40) + " 0%," + self.convertHex(rand2, 40) + " 100%)");
    grad.css("background-image", "-o-linear-gradient(top, " + self.convertHex(rand1, 40) + " 0%," + self.convertHex(rand2, 40) + " 100%)");
    grad.css("background-image", "-ms-linear-gradient(top, " + self.convertHex(rand1, 40) + " 0%," + self.convertHex(rand2, 40) + " 100%)");
    grad.css("background-image", "linear-gradient(to bottom, " + self.convertHex(rand1, 40) + " 0%," + self.convertHex(rand2, 40) + " 100%)");
    grad.css("filter", "progid:DXImageTransform.Microsoft.gradient( startColorstr='" + self.convertHex(rand1, 40) + "', endColorstr='" + self.convertHex(rand2, 40) + "',GradientType=0 )");

};


Rand_grad.prototype.convertHex = function (hex, opacity) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);

    // Add Opacity to RGB to obtain RGBA
    result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';

    return result;
};