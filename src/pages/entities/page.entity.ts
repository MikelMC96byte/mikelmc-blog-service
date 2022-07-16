export class Page {
  id: string;
  name: string;
  slug: string;
  content: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id?: string,
    name?: string,
    slug?: string,
    content?: string,
    created_at?: Date,
    updated_at?: Date,
  ) {
    if (!id) this.id = '';
    else this.id = id;
    if (!name) this.name = '';
    else this.name = name;
    if (!slug) this.slug = '';
    else this.slug = slug;
    if (!content) this.content = '';
    else this.content = content;
    if (!created_at) this.created_at = new Date();
    else this.created_at = created_at;
    if (!updated_at) this.updated_at = new Date();
    else this.updated_at = updated_at;
  }
}
