# PARCIAL III - Consumo de API con Contenedores Docker

## 📌 Curso
**Sistemas Distribuidos (8108268)**  
**Periodo:** I-2025  
**Fecha:** 20 de mayo de 2025

## 👥 Integrantes
- Nombre Estudiante 1 - Código
- Nombre Estudiante 2 - Código

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
docker pull tuusuario/jsonplaceholder-viewer
