import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
    args:{
        name:v.string(),
        email:v.string(),
        picture:v.string()
    },
    handler:async(ctx, args)=>{
        //if user exists
        const user = await ctx.db.query('users')
        .filter((q) => q.eq(q.field('email'), args.email))

        //if user not exists
        if(user?.length == 0) {
            const result = await ctx.db.insert('users', {
                name:args.name,
                email:args.email,
                picture:args.picture,
                credits:3
            })
            return result;
        }
        return user[0];
    }
})