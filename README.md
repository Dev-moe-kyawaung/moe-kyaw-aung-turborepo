.PHONY: help build dev lint test storybook storybook-build clean

help:
\t@echo "Available commands:"
\t@echo "  make build        - Build all apps and packages with turbo"
\t@echo "  make dev          - Start dev servers for all apps (turbo)"
\t@echo "  make lint         - Run ESLint across the monorepo"
\t@echo "  make test         - Run tests across the monorepo"
\t@echo "  make storybook    - Run Storybook for ui package"
\t@echo "  make storybook-build - Build Storybook for ui package"
\t@echo "  make clean        - Clean dist folders"

build:
\tpnpm turbo run build

dev:
\tpnpm turbo run dev

lint:
\tpnpm turbo run lint

test:
\tpnpm turbo run test

storybook:
\tpnpm turbo run storybook --filter=ui

storybook-build:
\tpnpm turbo run storybook:build --filter=ui

clean:
\trm -rf apps/*/dist packages/*/dist packages/*/storybook-static
