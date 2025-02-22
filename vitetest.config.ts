import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // ...
    include: ["**/tests/unit/*.{test,spec}.{ts,tsx}"],
  },
});
