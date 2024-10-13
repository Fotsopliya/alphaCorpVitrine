import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { adminId } = await request.json();

  const auth = getAuth(request);
  
  // You can access the userId, sessionId, and other properties from auth
  const { userId } = auth;

  try {
    const user = await clerkClient.users.getUser(userId);

    await prisma.admins.upsert({
      where: { id: adminId },
      update: {
        email: user.email,
        username: user.username,
        password: user.password,
      },
      create: {
        id: adminId,
        email: user.email,
        username: user.username,
        password: user.password,
      },
    });

    return NextResponse.json({ message: 'User synced' });
  } catch (error) {
    return NextResponse.json({ message: 'Error syncing user' }, { status: 500 });
  }
}
