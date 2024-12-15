# Guía de Contribución

## Proceso de Contribución
1. Fork del repositorio
2. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'feat: agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Crear Pull Request

## Estándares de Código

### Backend (Node.js)
- Usar ES6+
- Seguir guía de estilo Airbnb
- Documentar funciones con JSDoc
- Tests unitarios con Jasmine

### Frontend (Angular)
- Seguir Angular Style Guide oficial
- Nombres de componentes en kebab-case
- Tests unitarios con Jasmine
- Usar TypeScript strict mode

## Commits
Seguir Conventional Commits:
- feat: nueva funcionalidad
- fix: corrección de bug
- docs: documentación
- style: formato
- refactor: refactorización
- test: tests
- chore: mantenimiento

## Pull Requests
- Descripción clara del cambio
- Referencias a issues relacionados
- Screenshots si hay cambios visuales
- Todos los tests deben pasar
- Requerido review de al menos 1 colaborador

## ¿Cómo Reportar Bugs?
1. Usar el template de issues
2. Incluir pasos para reproducir
3. Versiones de Node/Angular
4. Logs relevantes

## Guías de Estilo
- [Airbnb JavaScript](https://github.com/airbnb/javascript)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Conventional Commits](https://www.conventionalcommits.org/es)

## GitHub Copilot Usage Guidelines
- Use Copilot as a guide, not a crutch. Always review and understand the code suggestions.
- Combine Copilot with other tools like linters and formatters to ensure code quality.
- Keep your codebase and dependencies up to date to get the best suggestions.
- Provide clear and concise comments in your code to help Copilot understand the context.

## Review Process for Copilot Suggestions
- When using Copilot, ensure that the suggestions are reviewed by at least one collaborator.
- Verify that the suggestions align with the project's coding standards and guidelines.
- Test the code thoroughly to ensure it works as expected and does not introduce any bugs.

## Contacto
Para dudas o sugerencias:
- Crear un issue
- Correo: eduferreyraok@gmail.com
