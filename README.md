# Webpack Module Federation Example

This project is a study case of an project architecture using Webpack Module Federation. It consists of multiple, independently deployable applications that share code and components at runtime.

## Packages

- `app`: The main application shell that consumes remote modules from other applications.
- `home`: A remote application that exposes a `Home` component.
- `contact`: A remote application that exposes a `Contact` component.
