"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    // Save to database
    const post = await new Promise<{ slug: string; title: string; content: string }>(resolve => {
        console.log("Saving post...");
        setTimeout(() => {
            resolve({
                slug: "test-post",
                title,
                content,
            });
        }, 1000);
    });

    // Revalidate the posts list so it shows the new post
    revalidatePath("/posts");

    // Redirect to the newly created post
    // With JavaScript this is a client-side navigation. Without it
    // (progressive enhancement), the browser gets a 303 redirect.
    redirect(`/posts/${post.slug}`);
}