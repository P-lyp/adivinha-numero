const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(element) {
    var chute = element.results[0][0].transcript

   function exibeChuteTela(chute) {
    elementoChute.innerHTML = `
         <div>Você disse:</div>
         <span class="box">${chute}</span>
         `
   }

   exibeChuteTela(chute)
   verificaChuteValido(chute)
}




recognition.addEventListener('end', () => recognition.start())