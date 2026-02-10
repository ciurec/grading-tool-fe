
export interface PlagiarismResult {
  studentA: string;
  studentB: string;
  copiedFrom: string | null;
  similarity: number;
  repoA?: string;
  repoB?: string;
}
