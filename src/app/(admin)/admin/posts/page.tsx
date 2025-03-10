
"use client"
import { get } from "@/js/api";

export default function Next() {
  
  get('https://guillermopradas.com/api/v1/blog-posts')
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });

  return (
    <div>
      <p>Posts</p>
    </div>
  )
}