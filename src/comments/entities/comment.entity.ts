export class Comment {
  id: string;
  content: string;
  user_id: string;
  post_id: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id?: string,
    content?: string,
    user_id?: string,
    post_id?: string,
    created_at?: Date,
    updated_at?: Date,
  ) {
    if (!id) this.id = '';
    else this.id = id;
    if (!content) this.content = '';
    else this.content = content;
    if (!created_at) this.created_at = new Date();
    else this.created_at = created_at;
    if (!updated_at) this.updated_at = new Date();
    else this.updated_at = updated_at;
    if (!user_id) this.user_id = '';
    else this.user_id = user_id;
    if (!post_id) this.post_id = '';
    else this.post_id = post_id;
  }
}
