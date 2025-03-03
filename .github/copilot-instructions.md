# Copilot Instructions

This document provides context and guidelines for GitHub Copilot to better understand and assist with this project.

## Project Overview

This is a fullstack course project for UTN (Universidad Tecnológica Nacional) students, teaching Node.js and Angular development.

## Project Structure

- `backend/`: Node.js + Express server
- `frontend/`: Angular application
- `.github/`: GitHub workflows and configurations
- Root level documentation files

## Technical Stack

### Backend

- Node.js (LTS versions 20.x or 18.x)
- Express.js for REST API
- TypeScript for type safety
- Development port: 3000

### Frontend

- Angular 17.x
- TypeScript
- Development port: 4200

## Code Style Guidelines

1. **General**

   - Use TypeScript strict mode
   - Follow Airbnb JavaScript style guide
   - Use ESLint for linting
   - Follow [Conventional Commits](https://www.conventionalcommits.org/)

2. **Backend**

   - Use ES6+ features
   - Document functions with JSDoc
   - Implement unit tests with Jasmine
   - Follow RESTful API principles
   - Use async/await for asynchronous operations

3. **Frontend**
   - Follow official Angular style guide
   - Use kebab-case for component files
   - Implement unit tests with Jasmine
   - Use Angular CLI for scaffolding
   - Implement lazy loading where appropriate

## Repository Structure

- Main branch: production-ready code
- Feature branches: follow pattern `feature/feature-name`
- Exercise branches: contain specific exercise implementations

## Exercise Branches

1. `guess-a-number`: Number guessing game implementation
2. `typescript-classes`: TypeScript class exercises

## Common Tasks

1. **Creating New Features**

   - Branch from main
   - Follow feature branch naming convention
   - Include tests
   - Update documentation

2. **Bug Fixes**
   - Reference issue number
   - Include regression tests
   - Update affected documentation

## Security Considerations

- Keep dependencies updated
- Follow OWASP guidelines
- Implement secure authentication
- Validate user inputs
- Use environment variables for sensitive data

## Project Goals

1. Teach fullstack development fundamentals
2. Provide hands-on experience
3. Follow industry best practices
4. Maintain code quality and consistency

## Testing Requirements

- All new features must include tests
- Maintain test coverage
- Use meaningful test descriptions
- Follow testing best practices

## Documentation Standards

- Keep README.md updated
- Document API endpoints
- Include JSDoc comments
- Maintain clear commit messages

## Development Workflow

1. Clone repository
2. Install dependencies
3. Create feature branch
4. Implement changes
5. Add tests
6. Update documentation
7. Create pull request

## Performance Considerations

- Optimize bundle sizes
- Implement lazy loading
- Use proper caching strategies
- Follow Angular performance best practices

## Accessibility Requirements

- Follow WCAG guidelines
- Include ARIA labels
- Ensure keyboard navigation
- Maintain proper contrast ratios

## Error Handling

- Implement proper error boundaries
- Use meaningful error messages
- Log errors appropriately
- Provide user-friendly error feedback

## State Management

- Use proper state management patterns
- Follow immutability principles
- Implement proper data flow
- Consider using NgRx for complex state

Note: This file serves as a guide for GitHub Copilot to provide more accurate and context-aware suggestions. Update as needed when project requirements change.
