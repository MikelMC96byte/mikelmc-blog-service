export class Like {
  id: string;
  post_id: string;
  user_id: string;
  value: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(
    id?: string,
    post_id?: string,
    user_id?: string,
    created_at?: Date,
    updated_at?: Date,
  ) {
    if (!id) this.id = '';
    else this.id = id;
    if (!post_id) this.post_id = '';
    else this.post_id = post_id;
    if (!user_id) this.user_id = '';
    else this.user_id = user_id;
    if (!created_at) this.created_at = new Date();
    else this.created_at = created_at;
    if (!updated_at) this.updated_at = new Date();
    else this.updated_at = updated_at;
  }
}
