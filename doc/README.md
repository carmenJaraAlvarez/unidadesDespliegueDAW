# Documentación del Proyecto

Esta carpeta contiene la propuesta didáctica completa en dos formatos complementarios.

## 📁 Archivos

- **`Propuesta_Didactica_Despliegue_DAW.md`** - Archivo Markdown (fuente principal) ✏️
- **`Propuesta_Didactica_Despliegue_DAW.docx`** - Documento Word (formato profesional) 📄
- **`generar_docx.py`** - Script para regenerar el Word desde el Markdown 🔄

## 🎯 Flujo de trabajo recomendado

### Opción 1: Editar el Markdown (Recomendado)

1. **Edita** el archivo `.md` con cualquier editor de texto
2. **Ejecuta** el script para regenerar el Word:
   ```bash
   cd doc
   python generar_docx.py
   ```
3. **Versiona** los cambios en Git (el .md se versiona perfectamente)

### Opción 2: Editar el Word directamente

Si prefieres trabajar directamente en Word:

- Abre y edita el archivo `.docx` normalmente
- Los cambios solo estarán en el Word
- Para mantener sincronizado el Markdown, tendrás que actualizarlo manualmente

## ✅ Ventajas de usar Markdown como fuente

- ✏️ **Fácil de editar**: Cualquier editor de texto funciona
- 🔍 **Fácil de buscar**: Texto plano indexable
- 📊 **Control de versiones**: Git muestra diferencias claramente
- 🤖 **Automatizable**: Scripts pueden leer y modificar fácilmente
- 🌐 **Portable**: Se puede convertir a múltiples formatos

## 📝 Contenido del documento

El documento contiene la propuesta didáctica completa con:

### Unidad 1: La Paz es Compartir

- Datos de identificación
- Justificación (motivación, competencias, ODS)
- Principios DUA
- Producto final
- Concreción curricular
- Secuenciación didáctica (3 fases)
- Evaluación

### Unidad 2: Una nube sin agua

- Misma estructura que Unidad 1
- Enfoque en sostenibilidad y cloud computing

### Unidad 3: Defenderse o morir

- Misma estructura que Unidad 1
- Enfoque en ciberseguridad

### Anexos

- Información sobre el módulo de Despliegue de Aplicaciones Web

## 🔧 Requisitos

Para regenerar el documento Word necesitas:

```bash
pip install python-docx
```

## 💡 Tips

- El Markdown usa el mismo texto y expresiones que la aplicación web
- Las tablas se mantienen en ambos formatos
- Los estilos y colores se aplican automáticamente al generar el Word
- Puedes editar el script `generar_docx.py` para personalizar el formato del Word

---

**Licencia:** Creative Commons Reconocimiento Compartir igual 4.0
