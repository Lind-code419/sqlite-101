import * as sqlite from 'sqlite'; // * to import module that is not pure es6
import sqlite3 from 'sqlite3';





const db =  await sqlite.open({
    filename: './101.db',
    driver: sqlite3.Database
});

await db.migrate()

// query using await

//console.log(result); // cannot have 2 const in the same block

//funstion that returns all the queries

export async function getGreetings() { //async marks as special function with await
    const result = await db.all(`select * from greetings`);
    return result;

} 

export async function addGreeting(language, greeting) {
    //sql statement -insert
    //insert into greetings (language, greeting) values (?,?)
    
    const sql = `insert into greetings (language, greeting) values (?, ?)`
    await db.run(sql, [language, greeting]);
}

export async function deleteGreeting(id) {
    //sql statement -insert
    //insert into greetings (language, greeting) values (?,?)
    
    const sql = `delete from greetings where id =?`
    await db.run(sql, [id]);
}

export async function deleteGreetingByLanguage(language) {
    //sql statement -insert
    //insert into greetings (language, greeting) values (?,?)
    
    const sql = `delete from greetings where language =?`
    await db.run(sql, [language]);
}

export async function updateGreeting(language, greeting, id) {
    //sql statement -insert
    //insert into greetings (language, greeting, id) values (?,?)
    
    const sql = `update greetings set language =?, greeting =? where id =?`;
    await db.run(sql, [language, greeting, id]);
}







//.then(result => console.log(result)) 
//query using promise
/*db
    .all(`select * from greetings`)
    .then(result => {
        console.log(result);
    })

const countResult = await db.get(`select count(*) as count from greetings`);
console.log(countResult.count);*/



//await deleteGreeting(6);
//await deleteGreetingByLanguage('Sepedi')
//await updateGreeting('Sepedi', 'Thobela', 17)
console.log('end')
//ctrl-shift-p  to open database explorer