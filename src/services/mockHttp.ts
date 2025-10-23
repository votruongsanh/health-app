// Minimal fetch-like mock to simulate real network calls

type MockOptions = {
  delay?: number;
  status?: number; // 200 OK by default
  shouldFail?: boolean; // simulate network/server failure
};

export type MockResponse<T> = {
  ok: boolean;
  status: number;
  json: () => Promise<T>;
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function mockFetch<T>(
  data: T,
  options: MockOptions = {}
): Promise<MockResponse<T>> {
  const { delay = 250, status = 200, shouldFail = false } = options;
  await sleep(delay);
  if (shouldFail) {
    // Simulate network error similar to fetch throwing
    throw new Error("Network Error (mock)");
  }
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => data,
  };
}
