"use server";
import { PrismaClient } from "@/generated/prisma";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";


export async function getLatestProducts(){
    const prisma = new PrismaClient();

    const data =  prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: {createdAt: "desc"},
    })

    return data
}