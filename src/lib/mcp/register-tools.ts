import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { OhmLawTool } from "../../tools/calculators/ohm-law.js";

const tools = [OhmLawTool];

export const registerTools = (server: McpServer) => {
  tools.forEach((tool) => {
    new tool().register(server);
  });
};
