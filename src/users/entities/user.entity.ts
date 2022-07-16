export class User {
  id: string;
  roles: string[];
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  constructor(
    id?: string,
    roles?: string[],
    name?: string,
    email?: string,
    password?: string,
    created_at?: Date,
    updated_at?: Date,
  ) {
    if (!id) this.id = '';
    else this.id = id;
    if (!roles) this.roles = [];
    else this.roles = roles;
    if (!name) this.name = '';
    else this.name = name;
    if (!email) this.email = '';
    else this.email = email;
    if (!password) this.password = '';
    else this.password = password;
    if (!created_at) this.created_at = new Date();
    else this.created_at = created_at;
    if (!updated_at) this.updated_at = new Date();
    else this.updated_at = updated_at;
  }
}
