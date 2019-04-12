((root) => {
    Number.prototype.pad = function(size) {
        var s = String(this);
        while (s.length < (size || 2)) {
            s = '0' + s;
        }
        return s;
    };

    root.randomDigits = (length) => {
        return Math.floor(100000 + Math.random() * 900000).pad(6);
    };
})(this);
