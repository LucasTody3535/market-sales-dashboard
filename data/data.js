const USERS = Object.freeze([
    {
       id: 1,
       access_id: "20FGtr24",
       password: "12345"
    }
]);

export async function queryCanAccess(access_id, password) {
    for( let user of USERS ) {
        if( user.access_id === access_id,  user.password === password) return { canAccess: true, user };
    }
}
