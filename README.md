# MCP Streamable HTTP Server Example

This is an example of an MCP (Model Context Protocol) server using the streamable HTTP transport, built with Express and TypeScript.

## Features

- Streamable HTTP transport with session management.
- A simple "hello" tool.
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

## Connecting a Client

You can connect an MCP client to `http://localhost:3000/mcp`. Refer to your MCP client's documentation for instructions on how to connect to a streamable HTTP server. 