import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { LikesModule } from './likes/likes.module';
import { PagesModule } from './pages/pages.module';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [PostsModule, CommentsModule, LikesModule, PagesModule, UsersModule, ImagesModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
