import next from "next";
import { NextRequest, NextResponse } from "next/server";


export async function middleware(request: NextRequest) {

    if(request.nextUrl.pathname.startsWith('/admin')){

        if(request.nextUrl.pathname === "/admin"){
            return NextResponse.redirect(new URL("/admin/blog", request.url))
        }
    }
}