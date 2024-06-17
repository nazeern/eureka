'use server'

import { createClient } from "@/utils/supabase/server";
import { Tables } from "./types";
import { revalidatePath } from "next/cache";

export async function selectPosts(): Promise<Tables<'posts'>[] | null> {
    const supabase = createClient()

    const { data } = await supabase.from("posts").select("*")

    return data
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