# Propuesta Didáctica - Despliegue de Aplicaciones Web

Propuesta didáctica parcial elaborada por **Carmen Jara Álvarez** durante el aprendizaje de la asignatura AEMI del Máster Universitario en Profesorado en Enseñanza Secundaria Obligatoria y Bachillerato, Formación Profesional y Enseñanzas de Idiomas de la Universidad de Sevilla.

**Julio 2025**

---

## 📋 Descripción del Proyecto

Este proyecto presenta una propuesta didáctica completa para el módulo de **Despliegue de Aplicaciones Web** del ciclo formativo de grado superior de Desarrollo de Aplicaciones Web (DAW). La propuesta incluye tres unidades didácticas que integran valores de paz, sostenibilidad y seguridad en el aprendizaje técnico:

### Unidades Didácticas

1. **La Paz es Compartir** - Trabajo colaborativo y DevOps
2. **Una Nube sin Agua** - Computación en la nube y sostenibilidad
3. **Defenderse o Morir** - Seguridad en aplicaciones web

Cada unidad está diseñada siguiendo los principios del Diseño Universal para el Aprendizaje (DUA) y se alinea con los Objetivos de Desarrollo Sostenible (ODS).

---

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js (versión 18 o superior)
- Angular CLI 17.3.16
- npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/unidadesDespliegueDAW.git

# Instalar dependencias
cd unidadesDespliegueDAW
npm install
```

### Servidor de Desarrollo

```bash
ng serve
```

Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

---

## 📁 Estructura del Proyecto

```
unidadesDespliegueDAW/
├── src/
│   ├── app/
│   │   ├── body/
│   │   │   ├── home/              # Página de inicio
│   │   │   ├── unit1/             # Unidad 1: La Paz es Compartir
│   │   │   ├── unit2/             # Unidad 2: Una Nube sin Agua
│   │   │   ├── unit3/             # Unidad 3: Defenderse o Morir
│   │   │   └── attachments/       # Anexos (Mapas y Módulo)
│   │   ├── header/                # Cabecera de la aplicación
│   │   ├── sidebar/               # Menú de navegación lateral
│   │   └── footer/                # Pie de página
│   └── assets/
│       └── img/                   # Mapas conceptuales
└── doc/
    ├── Propuesta_Didactica_Despliegue_DAW.md    # Documento en Markdown
    ├── Propuesta_Didactica_Despliegue_DAW.docx  # Documento en Word
    └── generar_docx.py            # Script para generar DOCX desde MD
```

---

## 🛠️ Desarrollo

### Generar Componente

```bash
ng generate component nombre-componente
```

### Build

```bash
ng build
```

Los artefactos de construcción se almacenarán en el directorio `dist/`.

### Generar Documento Word desde Markdown

```bash
cd doc
python generar_docx.py
```

Este script convierte el archivo Markdown a formato Word manteniendo el formato y estilos.

---

## 📚 Contenido de la Propuesta

### Cada Unidad Didáctica incluye:

- **Datos de Identificación** - Información básica y temporalización
- **Justificación** - Motivación y alineación con competencias
- **Principios DUA** - Acciones para atención a la diversidad
- **Descripción del Producto Final** - Proyecto a desarrollar
- **Concreción Curricular** - Resultados de aprendizaje y criterios
- **Secuenciación Didáctica** - Fases detalladas de trabajo
  - Fase Inicial: Situación del alumnado
  - Fase de Desarrollo: Actividades prácticas
  - Fase de Síntesis: Evaluación y reflexión
- **Evaluación** - Rúbricas y criterios de evaluación

### Anexos

- **Mapas Conceptuales** - Representación visual de cada unidad
- **El Módulo** - Información completa del módulo profesional

---

## 🎯 Características Principales

- ✅ Diseño responsive y accesible
- ✅ Navegación intuitiva con menú lateral desplegable
- ✅ Contenido estructurado siguiendo principios pedagógicos
- ✅ Integración de ODS en todas las unidades
- ✅ Principios DUA aplicados
- ✅ Mapas conceptuales visuales
- ✅ Documentación disponible en múltiples formatos (Web, MD, DOCX)

---

## 📄 Licencia

Este recurso se comparte con licencia **Creative Commons Reconocimiento-CompartirIgual 4.0**.

[![Licencia Creative Commons](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0/)

Obra publicada con [Licencia Creative Commons Reconocimiento Compartir igual 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

---

## 👩‍🏫 Autora

**Carmen Jara Álvarez**

Máster Universitario en Profesorado - Universidad de Sevilla

---

## 🔧 Tecnologías Utilizadas

- Angular 17
- TypeScript
- HTML5 / CSS3
- Material Icons
- Python (para generación de documentos)
- python-docx

---

## 📞 Contacto y Contribuciones

Para consultas, sugerencias o contribuciones, por favor abre un issue en el repositorio o contacta directamente con la autora.

---

**Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.16**
