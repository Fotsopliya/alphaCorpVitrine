import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { WebhookEvent } from '@clerk/nextjs/server'

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const webhook: WebhookEvent = await request.json();

  if (webhook.type === 'user.created') {
    const { id, email, username , password  } = webhook.data;

    await prisma.user.upsert({
      where: { clerkId: id },
      update: { email, username , password},
      create: { clerkId: id, email, username , password  },
    });

    return NextResponse.json({ message: 'user synced' });
  } else {
    return NextResponse.json({ message: 'Unsupported event' }, { status: 400 });
  }
}
