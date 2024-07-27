export interface CreateChoresInput {
  name: string;
  description: string;
}

export interface ChoresRoom {
  id?: string;
  name: string;
  description: string;
  creator: string;
  members: string[];
  createAt: Date;
}
