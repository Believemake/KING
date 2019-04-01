

    var gui = new dat.GUI(),
        guiSet = {
            frequency: 12,
            reset: function reset() {
                S.reset();
            }
        };
    gui.add(guiSet, 'frequency').min(10).max(60);
    gui.add(guiSet, 'reset');
    //
    var S = {};
    /*========================================
    Utility
    ========================================*/
    S.PI = Math.PI;
    S.TAU = S.PI * 2;

    S.rand = function (min, max) {
        if (!max) {
            var max = min;
            min = 0;
        }

        return Math.random() * (max - min) + min;
    };

    /*========================================
    Initialize
    ========================================*/

    S.init = function () {
        S.c = document.getElementById('can');
        S.ctx = S.c.getContext('2d');
        S.simplex = new SimplexNoise();
        S.events();
        S.reset();
        S.loop();
    };
     S.inita = function () {
            S.c = document.getElementById('canb');
            S.ctx = S.c.getContext('2d');
            S.simplex = new SimplexNoise();
            S.events();
            S.reset();
            S.loop();
        };
         S.initb = function () {
                S.c = document.getElementById('canc');
                S.ctx = S.c.getContext('2d');
                S.simplex = new SimplexNoise();
                S.events();
                S.reset();
                S.loop();
            };

    S.reset = function () {
        S.w = window.innerWidth;
        S.h = window.innerHeight;
        S.cx = S.w / 2;
        S.cy = S.h / 2;
        S.c.width = S.w;
        S.c.height = S.h;

        S.count = Math.floor(S.w / guiSet.frequency); // Wave frequency
        S.xoff = 0;
        S.xinc = 0.1;
        S.yoff = 0;
        S.yinc = 0.01; // Speed
        S.goff = 0;
        S.ginc = 0;
        S.y = S.h * 0.9;
        S.length = S.w + 0;
        S.amp = 40; // Wave height
    };

    S.events = function () {
        window.addEventListener('resize', S.reset.bind(undefined));
    };
    S.wave = function (color, amp, height, comp) {
        S.ctx.beginPath();
        var sway = S.simplex.noise2D(S.goff, 0) * amp;

        for (var i = 0; i <= S.count; i++) {
            S.xoff += S.xinc;
            var x = S.cx - S.length / 2 + S.length / S.count * i;
            var y = height + S.simplex.noise2D(S.xoff, S.yoff) * amp + sway;
            S.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y);
        }

        S.ctx.lineTo(S.w, -S.h); // -S.h - Vertically reflection
        S.ctx.lineTo(0, -S.h); // -S.h - Vertically reflection
        S.ctx.closePath();
        S.ctx.fillStyle = color;
        if (comp) {
            S.ctx.globalCompositeOperation = comp;
        }
        S.ctx.fill();
    };
    S.loop = function () {
        requestAnimationFrame(S.loop);
        S.ctx.clearRect(0, 0, S.w, S.h);
        S.xoff = 0;
        S.ctx.fillStyle = "#9f7af0";
        S.ctx.fillRect(0, 0, S.w, S.h);
        S.wave("#fff", 30, S.h * .5, "screen");
         S.wave("#7975ee", 30, S.h * .5, "screen");
        S.wave("#27d1e1", 30, S.h * .58, "screen");
        S.wave("#7975ee", 30, S.h * .56, "screen");
       
        S.ctx.fillStyle = "#fff";
        S.ctx.globalCompositeOperation = "darken";
        S.ctx.fillRect(0, 0, S.w, S.h);
        S.yoff += S.yinc;
        S.goff += S.ginc;
    };


    var gui = new dat.GUI(),
        guiSet = {
            frequency: 12,
            reset: function reset() {
                M.reset();
            }
        };
    gui.add(guiSet, 'frequency').min(10).max(60);
    gui.add(guiSet, 'reset');
    //
    var M = {};
    /*========================================
    Utility
    ========================================*/
    M.PI = Math.PI;
    M.TAU = M.PI * 2;

    M.rand = function (min, max) {
        if (!max) {
            var max = min;
            min = 0;
        }

        return Math.random() * (max - min) + min;
    };

    /*========================================
    Initialize
    ========================================*/

    M.init = function () {
        M.c = document.getElementById('can');
        M.ctx = M.c.getContext('2d');
        M.simplex = new SimplexNoise();
        M.events();
        M.reset();
        M.loop();
    };
    M.inita = function () {
        M.c = document.getElementById('canb');
        M.ctx = M.c.getContext('2d');
        M.simplex = new SimplexNoise();
        M.events();
        M.reset();
        M.loop();
    };
    M.initb = function () {
        M.c = document.getElementById('canc');
        M.ctx = M.c.getContext('2d');
        M.simplex = new SimplexNoise();
        M.events();
        M.reset();
        M.loop();
    };

    M.reset = function () {
        M.w = window.innerWidth;
        M.h = window.innerHeight;
        M.cx = M.w / 2;
        M.cy = M.h / 2;
        M.c.width = M.w;
        M.c.height = M.h;

        M.count = Math.floor(M.w / guiSet.frequency); // Wave frequency
        M.xoff = 0;
        M.xinc = 0.1;
        M.yoff = 0;
        M.yinc = 0.01; // Speed
        M.goff = 0;
        M.ginc = 0;
        M.y = M.h * 0.9;
        M.length = M.w + 0;
        M.amp = 40; // Wave height
    };

    M.events = function () {
        window.addEventListener('resize', M.reset.bind(undefined));
    };
    M.wave = function (color, amp, height, comp) {
        M.ctx.beginPath();
        var sway = M.simplex.noise2D(M.goff, 0) * amp;

        for (var i = 0; i <= M.count; i++) {
            M.xoff += M.xinc;
            var x = M.cx - M.length / 2 + M.length / M.count * i;
            var y = height + M.simplex.noise2D(M.xoff, M.yoff) * amp + sway;
            M.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y);
        }

        M.ctx.lineTo(M.w, -M.h); // -M.h - Vertically reflection
        M.ctx.lineTo(0, -M.h); // -M.h - Vertically reflection
        M.ctx.closePath();
        M.ctx.fillStyle = color;
        if (comp) {
            M.ctx.globalCompositeOperation = comp;
        }
        M.ctx.fill();
    };
    M.loop = function () {
        requestAnimationFrame(M.loop);
        M.ctx.clearRect(0, 0, M.w, M.h);
        M.xoff = 0;
        M.ctx.fillStyle = "#9f7af0";
        M.ctx.fillRect(0, 0, M.w, M.h);
        M.wave("#fff", 30, M.h * .5, "screen");
        M.wave("#7975ee", 30, M.h * .5, "screen");
        M.wave("#27d1e1", 30, M.h * .58, "screen");
        M.wave("#7975ee", 30, M.h * .56, "screen");

        M.ctx.fillStyle = "#fff";
        M.ctx.globalCompositeOperation = "darken";
        M.ctx.fillRect(0, 0, M.w, M.h);
        M.yoff += M.yinc;
        M.goff += M.ginc;
    };


    var gui = new dat.GUI(),
        guiSet = {
            frequency: 12,
            reset: function reset() {
                F.reset();
            }
        };
    gui.add(guiSet, 'frequency').min(10).max(60);
    gui.add(guiSet, 'reset');
    //
    var F = {};
    /*========================================
    Utility
    ========================================*/
    F.PI = Math.PI;
    F.TAU = F.PI * 2;

    F.rand = function (min, max) {
        if (!max) {
            var max = min;
            min = 0;
        }

        return Math.random() * (max - min) + min;
    };

    /*========================================
    Initialize
    ========================================*/

    F.init = function () {
        F.c = document.getElementById('can');
        F.ctx = F.c.getContext('2d');
        F.simplex = new SimplexNoise();
        F.events();
        F.reset();
        F.loop();
    };
    F.inita = function () {
        F.c = document.getElementById('canb');
        F.ctx = F.c.getContext('2d');
        F.simplex = new SimplexNoise();
        F.events();
        F.reset();
        F.loop();
    };
    F.initb = function () {
        F.c = document.getElementById('canc');
        F.ctx = F.c.getContext('2d');
        F.simplex = new SimplexNoise();
        F.events();
        F.reset();
        F.loop();
    };

    F.reset = function () {
        F.w = window.innerWidth;
        F.h = window.innerHeight;
        F.cx = F.w / 2;
        F.cy = F.h / 2;
        F.c.width = F.w;
        F.c.height = F.h;

        F.count = Math.floor(F.w / guiSet.frequency); // Wave frequency
        F.xoff = 0;
        F.xinc = 0.1;
        F.yoff = 0;
        F.yinc = 0.01; // Speed
        F.goff = 0;
        F.ginc = 0;
        F.y = F.h * 0.9;
        F.length = F.w + 0;
        F.amp = 40; // Wave height
    };

    F.events = function () {
        window.addEventListener('resize', F.reset.bind(undefined));
    };
    F.wave = function (color, amp, height, comp) {
        F.ctx.beginPath();
        var sway = F.simplex.noise2D(F.goff, 0) * amp;

        for (var i = 0; i <= F.count; i++) {
            F.xoff += F.xinc;
            var x = F.cx - F.length / 2 + F.length / F.count * i;
            var y = height + F.simplex.noise2D(F.xoff, F.yoff) * amp + sway;
            F.ctx[i === 0 ? 'moveTo' : 'lineTo'](x, y);
        }

        F.ctx.lineTo(F.w, -F.h); // -F.h - Vertically reflection
        F.ctx.lineTo(0, -F.h); // -F.h - Vertically reflection
        F.ctx.closePath();
        F.ctx.fillStyle = color;
        if (comp) {
            F.ctx.globalCompositeOperation = comp;
        }
        F.ctx.fill();
    };
    F.loop = function () {
        requestAnimationFrame(F.loop);
        F.ctx.clearRect(0, 0, F.w, F.h);
        F.xoff = 0;
        F.ctx.fillStyle = "#9f7af0";
        F.ctx.fillRect(0, 0, F.w, F.h);
        F.wave("#fff", 30, F.h * .5, "screen");
        F.wave("#7975ee", 30, F.h * .5, "screen");
        F.wave("#27d1e1", 30, F.h * .58, "screen");
        F.wave("#7975ee", 30, F.h * .56, "screen");

        F.ctx.fillStyle = "#fff";
        F.ctx.globalCompositeOperation = "darken";
        F.ctx.fillRect(0, 0, F.w, F.h);
        F.yoff += F.yinc;
        F.goff += F.ginc;
    };
    S.init();
   M.inita();
    F.initb();
