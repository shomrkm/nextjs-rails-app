export type Task = {
  id: string;
  no: number;
  title: string;
  description: string;
  status: 0 | 1 | 2 | 3 | 4;
  createdAt: Date;
  updatedAt: Date;
};
