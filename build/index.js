"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const http = __importStar(require("http"));
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
    }
    else {
        // Pour toute autre requête, répondre avec un code 404 et une réponse vide
        res.statusCode = 404;
        res.end();
    }
});
// Démarrer le serveur sur le port spécifié
server.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution à http://localhost:${PORT}/`);
});
