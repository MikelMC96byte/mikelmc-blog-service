export class Image {
  id: string;
  name: string;
  alt: string;
  data: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id?: string,
    name?: string,
    alt?: string,
    data?: string,
    created_at?: Date,
    updated_at?: Date,
  ) {
    if (!id) this.id = '';
    else this.id = id;
    if (!name) this.name = '';
    else this.name = name;
    if (!alt) this.alt = '';
    else this.alt = alt;
    if (!data) this.data = '';
    else this.data = data;
    if (!created_at) this.created_at = new Date();
    else this.created_at = created_at;
    if (!updated_at) this.updated_at = new Date();
    else this.updated_at = updated_at;
  }
}
