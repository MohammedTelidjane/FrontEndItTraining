# Projet FrontEndItTraining

Ce travail est réalisé dans le cadre d'une formation POEC JAVA/JEE. Il consiste à developper une application web pour une école qui propose des formations.
Ce projet utilise Angular et Spring Boot une avec application CRUD.
Le serveur  utilise Spring Boot avec Spring Web MVC pour REST Controller et Spring Data JPA pour interagir avec la base de données MySQL. Le côté client est fait avec Angular 11, HTTPClient & Router.

Ce projet est généré avec version 11.2.1, et openjdk11

Pour exécuter ce projet voici un résumé de ce que vous devez faire.

# Installation des outils nécessaires
## Installation Coté Serveur
-Télécharger OpenJdk 11
-Télécharger Spring Tool Suite
## Installation Serveur de Gestion de Base de Données
-Telecharger et installer Mysql  workbench
## Installation Coté Client
Avant d'utiliser Angular, il faut installer un certain nombre de logiciels
- Node.js impossible de faire fonctionner Angular sans lui
- Visual Studio Code ce choix est arbitraire.
- Installation d'Angular CLI
- Git pour la récupération du Projet
# Récupération du Projet
Pour récuperer le  code source du serveur backend faites:

-git clone https://github.com/Li-nda/ItTraining.git 

Pour récuperer le  code source du client front-end faites:

-git clone https://github.com/MohammedTelidjane/FrontEndItTraining.git

# Exécution du projet
Avant de lancer l'éxécution pensez à:
## Coté serveur:
-Ouvrir le projet sur SpringToolSuite (import project maven)

-Créer une base de données sous MYSQL Workbench qui porte le même nom, port, mot de passe que la base de donnée du projet(voir le fichier application.yml du projet). L'utilisateur peut changer ces parametres s'il le souhaite.

-Lancer l'éxécution du fichier MonProjetSpringSqlApplication.java

-Le serveur se lancera sur localhost: 8001.

## Coté client:
-Lancer Visual Studio Code dans le même dossier du projet client frontend
-Exécuter la commande npm i pour installer toutes les dépendances
-Exécuter la commande ng serve -o. Le navigateur se lancera sur `http://localhost:4200/` et restera actualisé automatiquement.

# Créateurs
Mohammed
Linda
Emannuel

# Remarque
Par manque de temps, les auteurs de ce projet ne sont pas arrivés à finir toute les fonctionalités du site.
