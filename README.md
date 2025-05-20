# PARCIAL III - Consumo de API con Contenedores Docker

## 📌 Curso
**Sistemas Distribuidos (8108268)**  
**Periodo:** I-2025  
**Fecha:** 20 de mayo de 2025

## 👥 Integrantes
- DAVID LEONARDO ESPINDOLA NUÑEZ - 202128390
- ANGEL SAMUEL GONZALES ZAMBRANO - 202212713

## 📋 Descripción

Aplicación web desarrollada en Node.js con Express que consume el recurso `posts` de la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).  
Permite:

- Visualizar todos los posts.
- Consultar un post específico por su ID.

La aplicación utiliza un patrón controlador-vista (`MVC`) y está empaquetada en una imagen Docker que se despliega a través del puerto `3000`.

---

## 🚀 Cómo ejecutar la app desde DockerHub

### 1. Descargar la imagen

```bash
docker pull davidespindola01/json-placeholder-image
```

### 2.  Crear contedor y probar

```bash
docker run -p 3000:3000 json-placeholder-image
```
### Acceso a la pagina
Acceder a la pagina localhost:3000 y probar.


