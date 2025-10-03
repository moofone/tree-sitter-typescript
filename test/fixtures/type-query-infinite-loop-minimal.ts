// Minimal case that triggers infinite loop in v0.23.x
// This file caused infinite recursion during tree-balancing phase
// when parsed in parallel/concurrent contexts

interface LoggerInstance {
  debug: ReturnType<typeof vi.fn>;
  info: ReturnType<typeof vi.fn>;
  warn: ReturnType<typeof vi.fn>;
  error: ReturnType<typeof vi.fn>;
}
