# MCP Streamable HTTP Server Example

This is an example of an MCP (Model Context Protocol) server that provides a collection of calculator tools. It's built with Express and TypeScript and uses the streamable HTTP transport.

## Features

- Streamable HTTP transport with session management.
- An Ohm's Law calculator tool.
- Linting with ESLint.
- Code formatting with Prettier.

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm

### Installation

1.  Clone the repository.
2.  Install the dependencies:

    ```bash
    npm install
    ```

### Running the server

#### Development Mode

To run the server in development mode with live-reloading:

```bash
npm run dev
```

The server will start on port 3000 by default. You can specify a different port with the `PORT` environment variable:

```bash
PORT=3002 npm run dev
```

#### Production Mode

First, build the TypeScript code:

```bash
npm run build
```

Then, start the server:

```bash
npm start
```

The server will run on `http://localhost:3000`.

## Available Tools

### Ohm's Law Calculator (`ohm-law`)

This tool calculates the missing value in Ohm's Law (V = I \* R). To use it, provide any two of the following three values: `voltage`, `current`, or `resistance`.

**Input Schema:**

- `voltage` (number, optional)
- `current` (number, optional)
- `resistance` (number, optional)

**Example:**

If you provide `voltage` and `current`, the tool will calculate `resistance`.

## Connecting a Client

You can connect an MCP client to `http://localhost:3000/mcp`. Refer to your MCP client's documentation for instructions on how to connect to a streamable HTTP server.
