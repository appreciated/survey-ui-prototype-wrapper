# Verwenden Sie das offizielle Node.js-Image als Basis
FROM node:14

# Setzen Sie das Arbeitsverzeichnis im Container
WORKDIR /usr/src/app

# Kopieren Sie die package.json und installieren Sie die Abhängigkeiten
COPY package*.json ./
RUN npm install

# Kopieren Sie den restlichen Quellcode
COPY . .

# Bauen Sie die Anwendung für die Produktion
RUN npm run build

# Installieren Sie einen HTTP-Server, um die statische Seite zu dienen
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]

# Expose Port 3000
EXPOSE 3000