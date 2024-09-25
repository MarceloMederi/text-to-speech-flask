from flask import Flask, request, render_template, send_file
from gtts import gTTS
import os
import time
import threading  # Para realizar operações em segundo plano

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert_text_to_speech():
    text = request.form.get('text')
    if not text or not text.strip():
        return {"error": "Texto não fornecido"}, 400

    # Simulando progresso (apenas para simulação, pode ser removido ou substituído por uma função real)
    for i in range(1, 11):
        time.sleep(0.5)

    # Gerar o arquivo de áudio
    tts = gTTS(text, lang='pt-br')
    filename = "Transcriver.mp3"
    tts.save(filename)

    # Enviar o arquivo e iniciar a remoção do mesmo após o envio
    def remove_file():
        time.sleep(5)  # Aguarda 5 segundos antes de remover
        os.remove(filename)

    threading.Thread(target=remove_file).start()

    return send_file(filename, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
