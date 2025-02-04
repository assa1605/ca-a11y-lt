# Rive Animation and Accessibility

This project demonstrates interactive UI components using Rive animations with accessibility considerations.

## Tech Stack

- [Slidev](https://sli.dev/) - Presentation framework
- [Rive](https://rive.app/) - Interactive animations
- Accessibility implementation

## Development

### Setup

Install dependencies:

```bash
yarn install
```

### Development Server

```bash
yarn dev
```

This will start the development server at `http://localhost:3030`

### Build and Preview

1. Production build:

```bash
yarn build
```

2. Preview the built files:

```bash
# Using serve
yarn serve

# Using Vite preview
yarn preview
```

### Export

```bash
# Export as PDF
yarn export
```

## Rive Animations

The project includes the following Rive animations in `src/assets/rive/`:

- `empty.riv` - Empty state animation
- `like.riv` - Like button animation
- `stars.riv` - Star rating animation

These animations are automatically copied to the `dist` directory during the build process.
