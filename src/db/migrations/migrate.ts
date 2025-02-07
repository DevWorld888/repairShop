import {db} from '@/db/index'
import {migrate} from 'drizzle-orm/neon-http/migrator'


const main = async ()=>{
    try{
        await migrate(db, {
            migrationsFolder: "src/db/migrations/"
        })
        console.log("Migration complete")
    } catch(err){
        console.error("error migrating", err)
        process.exit(1)
    }
}
main()