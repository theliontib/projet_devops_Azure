# Projet DevOps Azure

## Objectif

Apprendre et mettre en pratique les concepts DevOps avec Docker et Azure en déployant une application conteneurisée dans le cloud.

---

## Architecture

Application Node.js  
→ Docker Image  
→ Azure Container Registry (ACR)  
→ Azure Container Instance (ACI)  
→ URL publique

---

## Stack

- Docker
- Azure Container Registry (ACR)
- Azure Container Instance (ACI)
- GitHub Actions (à venir)
- Terraform (à venir)
- Kubernetes (bonus)

---

## Fonctionnement

1. Création d'une application Node.js
2. Création d'une image Docker
3. Tests en local avec Docker
4. Push de l'image vers Azure Container Registry
5. Déploiement sur Azure Container Instance
6. Exposition de l'application sur Internet

---

## Commandes principales

### Build de l'image

```bash
docker build -t devopsazure.azurecr.io/app:v2 -f docker/Dockerfile .
```

### Push de l'image vers Azure

```bash
docker push devopsazure.azurecr.io/app:v2
```

---

## Vérifications

### État du conteneur

```bash
az container show \
--resource-group devops-rg \
--name app-devops \
--query instanceView.state
```

### Logs

```bash
az container logs \
--resource-group devops-rg \
--name app-devops
```

### URL publique

```bash
az container show \
--resource-group devops-rg \
--name app-devops \
--query ipAddress.fqdn \
-o tsv
```

---

## Compétences acquises

- Création d'images Docker
- Compréhension du Dockerfile
- Gestion d'un Azure Container Registry
- Déploiement d'un conteneur dans Azure
- Gestion des tags d'images (v1, v2, etc.)
- Compréhension du cycle de vie d'une application conteneurisée
- Publication d'une application via une URL publique

---

## Concepts retenus

### Dockerfile

Le Dockerfile est la recette permettant de construire une image Docker.

### Image Docker

L'image contient l'application et toutes ses dépendances. Elle est stockée dans Azure Container Registry.

### Container

Le conteneur est une instance en exécution d'une image Docker.

### Azure Container Registry

Le Registry permet de stocker et distribuer les images Docker.

### Azure Container Instance

Azure Container Instance permet d'exécuter directement un conteneur dans Azure sans avoir à gérer de machine virtuelle.

---

## Cycle de déploiement

Code source  
→ Dockerfile  
→ Image Docker  
→ Azure Container Registry  
→ Azure Container Instance  
→ Application accessible sur Internet

---

## Évolutions prévues

- Mise en place d'un pipeline CI/CD avec GitHub Actions
- Déploiement automatisé
- Infrastructure as Code avec Terraform
- Orchestration de conteneurs avec Kubernetes
