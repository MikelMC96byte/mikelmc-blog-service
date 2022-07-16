export class Post {
  id: string;
  user_id: string;
  title: string;
  header_img: string;
  content: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id?: string,
    user_id?: string,
    title?: string,
    header_img?: string,
    content?: string,
    created_at?: Date,
    updated_at?: Date,
  ) {
    if (!id) this.id = '';
    else this.id = id;
    if (!title) this.title = '';
    else this.title = title;
    if (!header_img) this.header_img = '';
    else this.header_img = header_img;
    if (!content) this.content = '';
    else this.content = content;
    if (!created_at) this.created_at = new Date();
    else this.created_at = created_at;
    if (!updated_at) this.updated_at = new Date();
    else this.updated_at = updated_at;
    if (!user_id) this.user_id = '';
    else this.user_id = user_id;
  }
}
