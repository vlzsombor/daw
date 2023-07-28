function Callback(ev) {

    let saw = new Wad({ source: 'sine', env: { decay: 0.25, sustain: 0, release: 0.5 } });


    var o = actx.createOscillator();
    var g = actx.createGain();
    o.type = "sawtooth";
    o.detune.value = (ev.n - 69) * 100;
    g.gain.value = 0;
    o.start(actx.currentTime);
    g.gain.setTargetAtTime(0.2, ev.t, 0.005);
    g.gain.setTargetAtTime(0, ev.g, 0.1);
    o.connect(g);
    g.connect(actx.destination);
}
function Play() {
    actx.resume();
    document.getElementById("proll").play(actx, Callback);
}




/* <script>
timebase = 480;
actx = new AudioContext();

function Callback(ev) {
    var o = actx.createOscillator();
    var g = actx.createGain();
    o.type = "sawtooth";
    o.detune.value = (ev.n - 69) * 100;
    g.gain.value = 0;
    o.start(actx.currentTime);
    g.gain.setTargetAtTime(0.2, ev.t, 0.005);
    g.gain.setTargetAtTime(0, ev.g, 0.1);
    o.connect(g);
    g.connect(actx.destination);
}
function Play() {
    actx.resume();
    document.getElementById("proll").play(actx, Callback);
}
function Layout(k) {
    switch (k.id) {
        case "xrange":
            document.getElementById("proll").xrange = k.value * timebase;
            break;
        case "xoffset":
            document.getElementById("proll").xoffset = k.value * timebase;
            break;
        case "yrange":
            document.getElementById("proll").yrange = k.value;
            break;
        case "yoffset":
            document.getElementById("proll").yoffset = k.value;
            break;
    }
}
</script> */