// http://localhost:3000/api/blog

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await posts.json();
  return NextResponse.json(data);
}
