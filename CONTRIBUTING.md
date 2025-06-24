# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a **Angular 18 Quick Tutorial**! 🚀

## 📋 Tabla de Contenidos

- [🎯 Cómo Contribuir](#-cómo-contribuir)
- [🐛 Reportar Bugs](#-reportar-bugs)
- [✨ Solicitar Características](#-solicitar-características)
- [📝 Pull Requests](#-pull-requests)
- [🎨 Guías de Estilo](#-guías-de-estilo)
- [🧪 Testing](#-testing)
- [📚 Documentación](#-documentación)

## 🎯 Cómo Contribuir

### 🍴 Fork y Clone

1. **Fork** el repositorio en GitHub
2. **Clone** tu fork localmente:
   ```bash
   git clone https://github.com/tu-usuario/angular18-quick-tutorial.git
   cd angular18-quick-tutorial
   ```
3. **Añade** el repositorio original como upstream:
   ```bash
   git remote add upstream https://github.com/original-usuario/angular18-quick-tutorial.git
   ```

### 🌿 Crear una Rama

```bash
# Actualiza tu rama main
git checkout main
git pull upstream main

# Crea una nueva rama para tu feature
git checkout -b feature/nombre-de-tu-feature
```

### 💻 Desarrollo

1. **Instala** las dependencias:
   ```bash
   npm install
   ```

2. **Ejecuta** el servidor de desarrollo:
   ```bash
   npm start
   ```

3. **Haz** tus cambios siguiendo las guías de estilo

4. **Ejecuta** los tests:
   ```bash
   npm test
   npm run lint
   ```

### 💾 Commit y Push

```bash
# Añade tus cambios
git add .

# Haz commit con un mensaje descriptivo
git commit -m "feat: añadir nueva característica espectacular"

# Push a tu fork
git push origin feature/nombre-de-tu-feature
```

## 🐛 Reportar Bugs

### 📝 Antes de Reportar

1. **Busca** en los issues existentes
2. **Verifica** que el bug no esté ya reportado
3. **Prueba** en la última versión

### 🐛 Crear un Bug Report

Usa la plantilla de bug report y incluye:

- **Descripción** clara del problema
- **Pasos** para reproducir
- **Comportamiento** esperado vs actual
- **Screenshots** si es relevante
- **Información** del sistema (OS, navegador, etc.)

```markdown
## 🐛 Bug Report

### Descripción
[Describe el problema claramente]

### Pasos para Reproducir
1. Ve a '...'
2. Haz clic en '...'
3. Observa el error

### Comportamiento Esperado
[Describe lo que debería pasar]

### Comportamiento Actual
[Describe lo que realmente pasa]

### Screenshots
[Si aplica, añade screenshots]

### Información del Sistema
- OS: [Windows/Mac/Linux]
- Navegador: [Chrome/Firefox/Safari]
- Versión: [número]
```

## ✨ Solicitar Características

### 💡 Antes de Solicitar

1. **Busca** en los issues existentes
2. **Verifica** que la característica no esté ya solicitada
3. **Piensa** en el valor que aportaría

### ✨ Crear Feature Request

```markdown
## ✨ Feature Request

### Descripción
[Describe la característica que quieres]

### Caso de Uso
[Explica por qué es útil]

### Propuesta de Implementación
[Si tienes ideas sobre cómo implementarlo]

### Alternativas Consideradas
[Si aplica, describe alternativas]

### Información Adicional
[Cualquier información adicional]
```

## 📝 Pull Requests

### ✅ Checklist

- [ ] **Tests** pasan localmente
- [ ] **Linting** sin errores
- [ ] **Documentación** actualizada
- [ ] **Commits** con mensajes descriptivos
- [ ] **Código** sigue las guías de estilo
- [ ] **Funcionalidad** probada manualmente

### 📋 Proceso de Review

1. **Crea** el Pull Request
2. **Describe** los cambios claramente
3. **Menciona** issues relacionados
4. **Espera** feedback del equipo
5. **Responde** a los comentarios
6. **Haz** los cambios necesarios

## 🎨 Guías de Estilo

### 📝 Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: añadir nueva característica
fix: corregir bug
docs: actualizar documentación
style: cambios de formato
refactor: refactorizar código
test: añadir tests
chore: tareas de mantenimiento
```

### 💻 Código TypeScript

```typescript
// ✅ Bueno
export class VideojuegosComponent {
  private videojuegos: string[] = [];
  
  public addJuego(juego: string): void {
    if (juego?.trim()) {
      this.videojuegos.push(juego.trim());
    }
  }
}

// ❌ Malo
export class videojuegos {
  videojuegos = []
  
  addjuego(juego) {
    this.videojuegos.push(juego)
  }
}
```

### 🎨 CSS

```css
/* ✅ Bueno - Usar variables CSS */
.videojuegos {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  animation: slideIn 0.6s ease-out;
}

/* ❌ Malo - Valores hardcodeados */
.videojuegos {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

### 📄 HTML

```html
<!-- ✅ Bueno - Semántico y accesible -->
<section class="videojuegos-section">
  <h2>Listado de Videojuegos</h2>
  <ul role="list">
    <li *ngFor="let juego of videojuegos">{{ juego }}</li>
  </ul>
</section>

<!-- ❌ Malo - No semántico -->
<div class="container">
  <div class="title">Videojuegos</div>
  <div class="list">
    <div *ngFor="let juego of videojuegos">{{ juego }}</div>
  </div>
</div>
```

## 🧪 Testing

### 📋 Tipos de Tests

- **Unit Tests**: Funciones y métodos individuales
- **Component Tests**: Componentes Angular
- **Integration Tests**: Interacciones entre componentes
- **E2E Tests**: Flujos completos de usuario

### 🧪 Ejecutar Tests

```bash
# Todos los tests
npm test

# Tests en modo watch
npm run test:watch

# Tests con coverage
npm run test:coverage

# Tests E2E
npm run e2e
```

### 📝 Escribir Tests

```typescript
// ✅ Bueno
describe('VideojuegosComponent', () => {
  let component: VideojuegosComponent;
  let fixture: ComponentFixture<VideojuegosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideojuegosComponent]
    });
    fixture = TestBed.createComponent(VideojuegosComponent);
    component = fixture.componentInstance;
  });

  it('should add a new game', () => {
    const initialCount = component.videojuegos.length;
    component.addJuego('Nuevo Juego');
    expect(component.videojuegos.length).toBe(initialCount + 1);
  });
});
```

## 📚 Documentación

### 📝 Actualizar README

- **Nuevas características** añadidas
- **Cambios** en la API
- **Nuevas dependencias** o configuraciones
- **Ejemplos** de uso actualizados

### 📖 Comentarios en Código

```typescript
/**
 * Añade un nuevo videojuego a la lista
 * @param juego - Nombre del videojuego a añadir
 * @returns void
 */
public addJuego(juego: string): void {
  if (juego?.trim()) {
    this.videojuegos.push(juego.trim());
    this.nuevoJuego = '';
  }
}
```

## 🏆 Reconocimiento

### 🌟 Contribuidores Destacados

Los contribuidores más activos serán reconocidos en:

- **README.md** del proyecto
- **GitHub Stars** y badges
- **Menciones** en redes sociales
- **Invitaciones** a eventos especiales

### 🎯 Tipos de Contribuciones

- 🐛 **Bug fixes** - Corrección de errores
- ✨ **Features** - Nuevas características
- 📚 **Docs** - Mejoras en documentación
- 🎨 **Design** - Mejoras visuales
- ⚡ **Performance** - Optimizaciones
- 🧪 **Tests** - Cobertura de tests

## 📞 Contacto

### 💬 Comunidad

- **Discord**: [Enlace al servidor]
- **Twitter**: [@tu-usuario]
- **Email**: tu-email@example.com

### 🤝 Soporte

Si necesitas ayuda:

1. **Revisa** la documentación
2. **Busca** en issues existentes
3. **Crea** un nuevo issue
4. **Contacta** al equipo

---

**¡Gracias por contribuir a hacer este proyecto aún más espectacular!** 🚀✨ 
