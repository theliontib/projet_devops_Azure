# 🚀 Projet DevOps Azure

## 📌 Objectif

Apprendre et mettre en pratique les concepts DevOps en construisant une chaîne complète de déploiement :

- Développement d'une application Node.js
- Containerisation avec Docker
- Stockage des images dans Azure Container Registry
- Déploiement dans Azure Container Instance
- Automatisation avec GitHub Actions

---

## 🏗️ Architecture

```text
Application Node.js
        ↓
     Docker
        ↓
 Docker Image
        ↓
Azure Container Registry (ACR)
        ↓
Azure Container Instance (ACI)
        ↓
Application accessible sur Internet
```

---

## 🛠️ Technologies utilisées

- Node.js
- Docker
- Azure Container Registry (ACR)
- Azure Container Instance (ACI)
- GitHub Actions
- Azure CLI

### À venir

- Terraform
- Kubernetes
- Ansible
---

## 📂 Structure du projet

```text
projet-devops-azure/
│
├── app.js
├── package.json
│
├── docker/
│   └── Dockerfile
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
└── README.md
```

---

## ⚙️ Fonctionnement

### 1. Développement

Création d'une application Node.js simple exposant un service HTTP.

### 2. Containerisation

Création d'une image Docker via un Dockerfile.

```bash
docker build -t app .
```

### 3. Test local

Exécution du conteneur localement.

```bash
docker run -p 3000:3000 app
```

### 4. Stockage dans Azure

Push de l'image vers Azure Container Registry.

```bash
docker push devopsazure.azurecr.io/mon-app-devops:v2
```

### 5. Déploiement Cloud

Déploiement automatique de l'image dans Azure Container Instance.

---

## 🔄 CI/CD avec GitHub Actions

À chaque push sur la branche `main` :

```text
Git Push
    ↓
GitHub Actions
    ↓
Build Docker
    ↓
Push Azure Container Registry
    ↓
Suppression du conteneur existant
    ↓
Création du nouveau conteneur
    ↓
Application mise à jour automatiquement
```

---

## 🔐 Authentification

### Azure Credentials

Service Principal Azure utilisé par GitHub Actions pour se connecter à Azure.

Secret GitHub :

```text
AZURE_CREDENTIALS
```

### Azure Container Registry

Secrets GitHub utilisés pour publier les images Docker :

```text
ACR_NAME
ACR_USERNAME
ACR_PASSWORD
```

---

## ✅ Compétences acquises

### Docker

- Création d'images
- Dockerfile
- Gestion des tags
- Exécution de conteneurs

### Azure

- Resource Groups
- Azure Container Registry
- Azure Container Instance
- Déploiement d'applications conteneurisées

### GitHub Actions

- Workflows YAML
- Gestion des Secrets
- Intégration Continue (CI)
- Déploiement Continu (CD)

---

## 📈 État du projet

### Réalisé

- ✅ Application Node.js
- ✅ Dockerisation
- ✅ Build local
- ✅ Azure Container Registry
- ✅ Azure Container Instance
- ✅ Déploiement dans Azure
- ✅ GitHub Actions
- ✅ CI/CD automatique

### Prochaines étapes

- 🚧 Terraform (Infrastructure as Code)
- 🚧 Kubernetes (Orchestration)
- 🚧 Monitoring et observabilité
- 🚧 Ansible

---

## 🎯 Objectif final

```text
Code
 ↓
GitHub
 ↓
GitHub Actions
 ↓
Docker Build
 ↓
Azure Container Registry
 ↓
Azure Container Instance / Kubernetes
 ↓
Application disponible sur Internet
```

---

Projet réalisé dans le cadre d'un apprentissage DevOps et Cloud Azure.
