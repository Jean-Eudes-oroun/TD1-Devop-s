# TD1-Devop-s
markdown
Copier le code
# Serveur HTTP avec TypeScript et Node.js

Ce projet crée un serveur HTTP simple en utilisant TypeScript et Node.js. Le serveur expose une API qui retourne les en-têtes de la requête HTTP en format JSON lorsqu'une requête GET est envoyée sur le chemin `/ping`. Si une autre route ou méthode est utilisée, le serveur renvoie une réponse vide avec un code 404.

## Fonctionnalités

- **GET /ping** : Retourne les en-têtes de la requête HTTP au format JSON.
- **Variable d'environnement `PING_LISTEN_PORT`** : Permet de configurer le port sur lequel le serveur écoute. Si la variable n'est pas définie, un port par défaut (3000) est utilisé.
- **Réponse 404 pour toute autre route ou méthode** : Toute autre requête recevra une réponse vide avec un code 404.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- **Node.js** (version 14 ou supérieure) : [Téléchargez Node.js](https://nodejs.org/)
- **npm** (gestionnaire de paquets Node.js), inclus avec Node.js.

## Installation

1. **Cloner ce repository** :

   ```bash
   git clone https://github.com/votre-utilisateur/ts-node-server.git
   cd ts-node-server


2. Installer les dépendances :

Exécutez la commande suivante pour installer les dépendances du projet :

npm install

3. Configurer le fichier TypeScript :

Si vous n'avez pas encore installé TypeScript et les types associés, exécutez :
npm install typescript @types/node ts-node



Lancer le serveur

Lancer avec le port par défaut
Si vous ne souhaitez pas spécifier un port personnalisé, le serveur écoutera sur le port 3000 par défaut.

Exécutez la commande suivante pour démarrer le serveur :
npm start


Le serveur sera lancé et accessible à l'adresse suivante : http://localhost:3000.

Lancer avec un port personnalisé
Vous pouvez configurer le port sur lequel le serveur écoute en définissant la variable d'environnement
 PING_LISTEN_PORT avant de démarrer le serveur.
Sur Windows (CMD) :

set PING_LISTEN_PORT=5000
npm start

Cela fera en sorte que le serveur écoute sur le port 5000 au lieu du port par défaut.


Tester l'API
Une fois le serveur lancé, vous pouvez tester l'API en envoyant une requête GET à l'URL suivante :
curl http://localhost:<PORT>/ping

Remplacez <PORT> par le port sur lequel le serveur écoute (3000 par défaut ou un autre port configuré).

