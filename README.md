# 🚀 Projet DevOps Azure

## 📖 Présentation

Ce projet a pour objectif de découvrir et mettre en pratique les principaux concepts du DevOps et du Cloud Azure à travers le déploiement d'une application conteneurisée.

Le projet couvre :

- Docker
- Azure Container Registry (ACR)
- Azure Container Instance (ACI)
- GitHub Actions
- CI/CD
- Premiers concepts Terraform

---

# 🏗️ Architecture

```text
Application Node.js
        ↓
Docker Image
        ↓
Azure Container Registry
        ↓
Azure Container Instance
        ↓
Application accessible sur Internet
```

Après ajout du pipeline CI/CD :

```text
Git Push
    ↓
GitHub Actions
    ↓
Docker Build
    ↓
Push vers Azure Container Registry
    ↓
Déploiement Azure Container Instance
    ↓
Application mise à jour automatiquement
```

---

# 📂 Structure du projet

```text
projet-devops-azure/
│
├── app.js
├── package.json
│
├── docker/
│   └── Dockerfile
│
├── terraform/
│   └── main.tf
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
└── README.md
```

---

# 🛠️ Technologies utilisées

## Développement

- Node.js
- JavaScript

## Conteneurisation

- Docker

## Cloud

- Microsoft Azure
- Azure Container Registry (ACR)
- Azure Container Instance (ACI)

## Automatisation

- GitHub Actions
- CI/CD

## Infrastructure as Code

- Terraform (initiation)

---

# ⚙️ Fonctionnement

## Étape 1 – Création de l'application

Développement d'une application Node.js simple exposant un service HTTP.

---

## Étape 2 – Dockerisation

Création d'une image Docker à l'aide d'un Dockerfile.

Exemple :

```bash
docker build -t app .
```

---

## Étape 3 – Azure Container Registry

Publication de l'image Docker dans Azure Container Registry.

```bash
docker push devopsazure.azurecr.io/mon-app-devops:v2
```

---

## Étape 4 – Déploiement Azure

Déploiement de l'application dans Azure Container Instance.

Objectifs :

- Héberger l'application dans Azure
- Obtenir une URL publique
- Comprendre le cycle Image → Conteneur

---

## Étape 5 – CI/CD avec GitHub Actions

Mise en place d'un pipeline automatisé.

À chaque push sur la branche `main` :

```text
Build Docker
↓
Push ACR
↓
Suppression de l'ancien conteneur
↓
Création du nouveau conteneur
```

Le déploiement est donc entièrement automatisé.

---

## Étape 6 – Découverte de Terraform

Création des premiers fichiers Terraform afin de comprendre l'Infrastructure as Code.

Objectif :

```text
Décrire l'infrastructure Azure sous forme de code
```

Exemples :

- Resource Group
- Container Registry
- Container Instance

Cette partie constitue une première approche et servira de base pour de futurs projets.

---

# 🔐 Authentification

Le projet utilise plusieurs secrets GitHub :

## Azure

```text
AZURE_CREDENTIALS
```

Permet à GitHub Actions de s'authentifier auprès d'Azure via un Service Principal.

---

## Azure Container Registry

```text
ACR_NAME
ACR_USERNAME
ACR_PASSWORD
```

Permettent au pipeline de :

- se connecter au registre
- publier de nouvelles images Docker

---

# ✅ Compétences acquises

## Git & GitHub

- Gestion de dépôt Git
- Gestion des branches
- Push/Pull
- GitHub Actions

---

## Docker

- Création d'images
- Dockerfile
- Build
- Tags
- Conteneurs

---

## Azure

- Resource Groups
- Azure Container Registry
- Azure Container Instance
- Authentification Cloud

---

## DevOps

- CI (Continuous Integration)
- CD (Continuous Deployment)
- Automatisation des déploiements
- Gestion des secrets

---

## Terraform

- Découverte de l'Infrastructure as Code
- Création de ressources Azure via du code

---

# 📚 Concepts retenus

## Docker Image

Package contenant l'application et ses dépendances.

---

## Container

Instance en exécution d'une image Docker.

---

## Azure Container Registry

Service permettant de stocker les images Docker dans Azure.

---

## Azure Container Instance

Service permettant d'exécuter des conteneurs sans gérer de machine virtuelle.

---

## GitHub Actions

Service d'automatisation permettant d'exécuter des workflows lors d'événements Git.

---

## Service Principal

Compte technique utilisé par GitHub Actions pour communiquer avec Azure.

---

## Terraform

Outil permettant de décrire et recréer une infrastructure à partir de fichiers de configuration.

---

# 📈 Résultat obtenu

✅ Application Docker fonctionnelle

✅ Hébergement dans Azure

✅ Azure Container Registry

✅ Azure Container Instance

✅ Pipeline CI/CD GitHub Actions

✅ Déploiement automatique après chaque push

✅ Première approche Terraform

---

# 🔮 Évolutions futures

- Terraform avancé
- Infrastructure Proxmox
- Ansible
- Automatisation système
- Kubernetes
- Monitoring et observabilité

---

# 🎯 Objectif de carrière

Construire progressivement des compétences en :

```text
Administration Système
↓
Cloud Azure
↓
Infrastructure as Code
↓
DevOps
↓
Automatisation
```

afin de développer une expertise dans les domaines Cloud et DevOps.
