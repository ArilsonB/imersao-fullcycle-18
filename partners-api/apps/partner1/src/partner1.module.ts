import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '@app/core/auth/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.partner1',
      isGlobal: true,
    }),
    PrismaModule,
    EventsModule,
    SpotsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class Partner1Module {}
