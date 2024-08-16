import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    }

    // Try to insert the email into the subscribers table
    await pool.query('INSERT INTO subscribers (email) VALUES ($1)', [email]);

    return NextResponse.json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Database error:', error);

    // Check if the error is due to a unique constraint violation
    if (error.code === '23505') {
      return NextResponse.json({ message: 'This email is already subscribed' }, { status: 409 });
    }

    return NextResponse.json({ message: 'Subscription failed' }, { status: 500 });
  }
}
