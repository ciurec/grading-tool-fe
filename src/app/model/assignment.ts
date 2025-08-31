export interface Assignment {
  title: string;
  status: 'Predat' | 'Nepredat';
  grade?: number;
  copied?: boolean;
}
