import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'SECRET_KEY_DIFERPA_2026', // En producción esto iría en .env
      signOptions: { expiresIn: '60m' }, // Seguridad: expira en 60 mins
    }),
  ],
  providers: [], // Aquí iría el JwtStrategy y AuthService
  exports: [JwtModule],
})
export class AuthModule {}
