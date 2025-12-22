declare module "@next/env" {
  export function loadEnvConfig(
    dir: string,
    dev?: boolean,
    silent?: boolean,
  ): {
    combinedEnv: Record<string, string | undefined>;
  };
}
