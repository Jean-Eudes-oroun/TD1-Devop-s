import * as http from 'http';

// Récupérer le port à partir de la variable d'environnement PING_LISTEN_PORT ou définir un port par défaut (3000)
const PORT = process.env.PING_LISTEN_PORT ? parseInt(process.env.PING_LISTEN_PORT) : 3000;

// Création du serveur HTTP
const server = http.createServer((req, res) => {
    // Vérifier si la requête est une GET sur "/ping"
    if (req.url === '/ping' && req.method === 'GET') {
        // Récupérer les headers de la requête
        const headers = req.headers;

        // Définir l'en-tête Content-Type de la réponse à application/json
        res.setHeader('Content-Type', 'application/json');

        // Retourner les headers sous forme de JSON
        res.statusCode = 200;
        res.end(JSON.stringify(headers));
    } else {
        // Pour toute autre requête, répondre avec un code 404 et une réponse vide
        res.statusCode = 404;
        res.end();
    }
});

// Démarrer le serveur sur le port spécifié
server.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution à http://localhost:${PORT}/`);
});
