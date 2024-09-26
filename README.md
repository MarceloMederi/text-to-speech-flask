# Conversão de Texto para Fala
Este é um projeto simples em Flask que permite converter texto em fala usando a biblioteca Google Text-to-Speech (gTTS). O aplicativo possui uma interface web onde os usuários podem inserir texto e baixar o áudio gerado em formato MP3.

# Funcionalidades
- Conversão de Texto para Fala: Os usuários podem digitar texto e convertê-lo em áudio em português.
- Download de Áudio: O áudio gerado pode ser baixado diretamente do aplicativo.
- Interface Responsiva: A interface é amigável e responsiva, funcionando bem em dispositivos móveis.

# Tecnologias Usadas
- Flask: Framework web para Python.
- gTTS: Biblioteca para conversão de texto em fala.
- HTML/CSS/JavaScript: Para construção da interface web.

# Estrutura do Projeto
```plaintext
.
├── App.py             Código principal do aplicativo Flask
├── static/            Diretório para arquivos estáticos (CSS, imagens, etc.)
│   ├── favicon.png    Ícone da aba
│   ├── script.js      Script para interatividade
│   ├── style.css      Estilos CSS
│   └── spinner.gif    Ícone de carregamento
│
└── templates/         Diretório para templates HTML
    └── index.html     Template HTML principal
```

# Pré-requisitos:
Antes de executar o projeto, certifique-se de que você tenha os seguintes itens instalados:
- Python 3.x.  
- pip (gerenciador de pacotes Python).  

# Instalação:
Clone o repositório:
git clone https://github.com/MarceloMederi/text-to-speech-flask  
cd text-to-speech-flask  

# Crie e ative um ambiente virtual:
python -m venv venv  .
source venv/bin/activate  **Para Linux ou macOS**.
venv\Scripts\activate     **Para Windows**.

# Instale as dependências:
pip install flask gtts

# Executando o Aplicativo
Para iniciar o servidor, execute o seguinte comando:  
**python App.py**

*O aplicativo estará disponível em http://127.0.0.1:5000*  
Abra essa URL em um navegador para acessar a interface.

# Como Usar
Na página inicial, insira o texto que deseja converter em fala no campo de texto.
Clique no botão "Converter para Áudio" para iniciar a conversão.
Após alguns instantes, o arquivo MP3 será baixado automaticamente.

# Contribuição
Contribuições são bem-vindas! Se você encontrar um bug ou tiver uma sugestão de melhoria, sinta-se à vontade para abrir uma issue ou enviar um pull request.

# Licença
Este projeto é licenciado sob a MIT License.

# Agradecimentos
Agradecimentos especiais ao Google pela biblioteca gTTS que torna este projeto possível.
