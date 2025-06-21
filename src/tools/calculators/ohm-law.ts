import { McpServer } from "@modelcontextprotocol/sdk/server/mcp";
import { z } from "zod";

/**
 * Zod schema for Ohm's law input validation.
 * Ensures that exactly two of the three properties are provided.
 */
export const OhmLawInputSchema = z.object({
  voltage: z.number().optional(),
  current: z.number().optional(),
  resistance: z.number().optional(),
});

/**
 * Represents the input for Ohm's law calculation.
 * Derived from the Zod schema to ensure type safety.
 */
export type OhmLawInput = z.infer<typeof OhmLawInputSchema>;

/**
 * Represents the result of an Ohm's law calculation,
 * with all three values present.
 */
export type OhmLawResult = {
  voltage: number;
  current: number;
  resistance: number;
};

/**
 * Calculates the missing value in Ohm's law (V = I * R).
 * This is a pure function that takes a validated object with two of the three values
 * (voltage, current, resistance) and returns an object with all three values.
 *
 * @param input - A validated object containing exactly two of the three values.
 * @returns An object containing voltage, current, and resistance.
 * @throws {Error} on division by zero.
 */
export const calculateOhmLaw = (input: OhmLawInput): OhmLawResult => {
  const { voltage, current, resistance } = input;

  if (voltage !== undefined && current !== undefined) {
    if (current === 0) {
      throw new Error("Current cannot be zero when calculating resistance.");
    }
    const calculatedResistance = voltage / current;
    return { voltage, current, resistance: calculatedResistance };
  }

  if (voltage !== undefined && resistance !== undefined) {
    if (resistance === 0) {
      throw new Error("Resistance cannot be zero when calculating current.");
    }
    const calculatedCurrent = voltage / resistance;
    return { voltage, current: calculatedCurrent, resistance };
  }

  if (current !== undefined && resistance !== undefined) {
    const calculatedVoltage = current * resistance;
    return { voltage: calculatedVoltage, current, resistance };
  }

  // This should be unreachable if the input is validated by the schema
  throw new Error("Invalid input for Ohm`s law calculation.");
};

export class OhmLawTool {
  public execute(input: OhmLawInput) {
    return calculateOhmLaw(input);
  }

  public register(server: McpServer) {
    server.registerTool(
      "ohm-law",
      {
        title: "Ohm's Law Calculator",
        description: "Calculate the missing value in Ohm's Law",
        inputSchema: OhmLawInputSchema.shape,
      },
      async ({ voltage, current, resistance }) => ({
        content: [
          {
            type: "text",
            text: JSON.stringify(
              calculateOhmLaw({ voltage, current, resistance }),
            ),
          },
        ],
      }),
    );
  }
}
