'use server'

import { updateTag } from 'next/cache'

export async function updateProduct(formData: FormData) {
    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const price = formData.get('price') as string

    // 1. Mutate data
    // await db.products.update({
    //     where: { id },
    //     data: { name, price: parseFloat(price) }
    // })

    // 2. Expire affected entries so this action observes its own write.
    updateTag(`product-${id}`)
    updateTag('products')

    return { success: true }
}