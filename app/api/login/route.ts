import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
// import * as bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function POST(req:Request) {
    const { username, password } = await req.json();

    try {
        const user = await prisma.admins.findUnique({where: { username }});
        if (!user) {
            return NextResponse.json({ success: false, message: 'Identifiants invalides' }, { status: 401 });
        }
        
    } catch (error) {
        
    }
}