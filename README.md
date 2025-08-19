# 🏥 Patients API - NestJS

API para manejar pacientes con **NestJS**, MongoDB y Swagger para documentación.

---

## 📂 Estructura de ficheros
```
src/
├─ patients/
│ ├─ dto/
│ │ ├─ create-patient.dto.ts
│ │ └─ update-patient.dto.ts
│ ├─ entities/
│ │ └─ patient.entity.ts
│ ├─ swagger/
│ │ └─ patients.swagger.ts # Documentación Swagger separada
│ ├─ patients.service.ts # Lógica de negocio
│ └─ patients.controller.ts # Endpoints REST
├─ app.module.ts # Módulo principal
├─ main.ts # Punto de entrada
```


---

## ⚡ Instalación

# Clonar repositorio

```bash
git clone https://github.com/AlejandroGaGa/romiai.git

```

# Para iniciar
Es importante recalcar que se encesitan variables de entorno para poder inciiar el proyecto
```
npm install
npm run start:dev
```


📖 Acceso a la documentación Swagger

Swagger está habilitado en:
```
http://localhost:4000/api

Desde allí podrás:
Ver todos los endpoints /patients
Probar crear, actualizar, eliminar pacientes
Ver ejemplos de request y response
Paginación con page y limit
```

# Detalles técnicos

NestJS como framework principal.

MongoDB con Mongoose.

Swagger para documentación y ejemplos de request/response.

DTOs para validar y tipar la información de entrada.

Soft delete usando isDeleted en pacientes.


Documentación Swagger separada para mantener el controller limpio.