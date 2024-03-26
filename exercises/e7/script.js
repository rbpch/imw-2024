console.log('hello world')

// let audio = new Audio();
// audio.src = 'music.mp3';
// audio.controls = false;
// audio.loop = true;
// audio.autoplay = false;
// audio.crossOrigin = 'anonymous';
// context = new (window.AudioContext || window.webkitAudioContext)();

// var promise = document.querySelector('audio').play();

// if (promise !== undefined) {
//     promise.then(_ => {
//         // Autoplay started!
//     }).catch(error => {
//         // Autoplay was prevented.
//         $('#button').click(function () {
//             audio.play()
//         }) // Show a "Play" button so that user can start playback.
//     });
// }


$('.file');
const ctx = canvas1.getContext('2d');

let audioSource;
let analyser;

var constraints = { audio: true } // add video constraints if required


//Sound Visualization Analyser
// $('.button').click(function () {
//     $('.audio');
//     audio.src = '';
//     const context = new AudioContext();
//     audio.play();
//     audioSource = context.createMediaElementSource(audio);
//     analyser = context.createAnalyser();
//     audioSource.connect(analyser);
//     analyser.connect(context.destination)
//     analyser.fftSize = 64;
//     const bufferLength = analyser.frequencyBinCount; //bufferlength is half of fftSize
//     const dataArray = new Uint8Array(bufferLength);

//     //Bar Visualizer
//     const barWidth = canvas.width / bufferLength;
//     let barHeight;
//     let x;

//     function animate() {
//         x = 0;
//         ctx.clearRectangle(0, 0, canvas.width, canvas.height);
//         analyser.getByteFrequencyData(dataArray);

//         for (let i = 0; i < bufferLength; i++) {
//             barHeight = dataArray[i]; //louder sound longer bar
//             ctx.fillStyle = 'white';
//             ctx.filLRectangle(x, canvas.height - barHeight, barWidth, barHeight);
//             x += barWidth; //horizontal bars
//         }
//         requestAnimationFrame(animate);
//     }
//     animate();
// });

$('.file').change(function () {
    const files = this.files;
    const audio = document.getElementById('audio');
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    audioSource = context.createMediaElementSource(audio);
    analyser = context.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(context.destination)
    analyser.fftSize = 64;
    const bufferLength = analyser.frequencyBinCount; //bufferlength is half of fftSize
    const dataArray = new Uint8Array(bufferLength);

    //Bar Visualizer
    const barWidth = canvas.width / bufferLength;
    let barHeight;
    let x;

    function animate() {
        x = 0;
        ctx.clearRectangle(0, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);

        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i]; //louder sound longer bar
            ctx.fillStyle = 'white';
            ctx.filLRectangle(x, canvas.height - barHeight, barWidth, barHeight);
            x += barWidth; //horizontal bars
        }
        requestAnimationFrame(animate);
    }
    animate();
})