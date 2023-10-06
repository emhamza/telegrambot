// src/auth/strategies/google.strategy.ts

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: process.env.GOOGLE_CALLBACK_URL,
          passReqToCallback: true,
          scope: ['email', 'profile'],
        });
      }      

  async validate(request: any, accessToken: string, refreshToken: string, profile: any, done: any) {
    // Implement validation and user creation logic here
    // This function will be called after a successful Google login
    return done(null, profile);
  }
}
