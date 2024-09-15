
function example1(){
    console.log("angka 1");
    console.log("angka 2");
    console.log("angka 3");
    console.log("angka 4");
}

function example2(){
    console.log("angka 1");
    console.log("angka 2");
    setTimeout(() => {
        console.log("angka 3");   
    }, 1000)
    console.log("angka 4");
}

const user = {
    username: "user1",
    email: "uer1@email.com",
    password: "abcd123",
    dob: 27102001
}

const getPassword = (cb) => {
    setTimeout(()=>{
        return cb(user.password)
    }, 2000)
}

const getEmail = () => {
    setTimeout(()=>{
        return user.email
    }, 2000)
}


const userLogin = (pass) => {
    getPassword((passDB)=>{
    if (pass == passDB){
        console.log("Anda berhasil login")
    } else {
        console.log("Anda gagal login")
    }
  })
}

const getDOB = () => {
    return new Promise((resolve, reject) =>{
        const err = false
        if(err){
            reject ("Terjadi Kesalahan")
        } else {
            setTimeout(() => {
                resolve(user.dob)
            }, 2000)
        }
    })
}

getDOB().then((v) => {
    console.log("Masuk then")
    console.log(v);
}).catch((er) => {
    console.log("Masuk catch")
    console.log(er);
})