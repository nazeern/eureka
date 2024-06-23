'use server'

import { createClient } from "@/utils/supabase/server";
import { Tables } from "./types";
import { revalidatePath } from "next/cache";
import { encodeBase64UUID, decodeBase64UUID } from "./string";

export type PostWithEncodedId = Tables<'posts'> & {
    encodedId: string
}

export async function selectPosts(): Promise<PostWithEncodedId[] | null> {
    const supabase = createClient()

    const { data } = await supabase.from("posts").select("*")

    if (!data) {
        return null
    } else {
        const result = data.map(post => ({
                ...post,
                encodedId: encodeBase64UUID(post.id)
            })
        )
        return result
    }
}

export async function insertPost(formData: FormData) {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const title = formData.get('title') as string
    const body = formData.get('body') as string
    if (user) {
        await supabase.from("posts").insert({ 
            title, 
            body, 
            user_id: user.id 
        })
    }
    revalidatePath('/posts')
}

export async function deletePost() {
    return;
}

export async function selectPost(encodedId: string): Promise<Tables<'posts'> | null> {
    const postId = decodeBase64UUID(encodedId)

    const supabase = createClient()
    const { data } = await supabase.from("posts")
                                    .select("*")
                                    .eq('id', postId)
                                    .single()

    return data;
}