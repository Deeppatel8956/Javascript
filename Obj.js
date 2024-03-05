let obj=[{id:1,status:"good"},
{id:2,status:"good"},
{id:3,status:"good"},
{id:4,status:"good"},
{id:5,status:"good"},
{id:6,status:"good"},
{id:7,status:"good"}]

// 1st way
// Object.entries(obj).map((ele)=>{
//     // console.log(ele)
//     for (let key in ele) {
//         // console.log(key)
//         if (ele[key].id%2===0 && ele[key].status==="good") {
//             console.log(ele[key].id,"and",ele[key].status="bad")
//         }
//     }
// })

// 2st way
Object.entries(obj).map((ele)=>{
    // console.log(ele)
    for(let first of obj) {
        if (first.id%2===0 && first.status==="good") {
            console.log(first.id,"and",first.status="bad")
        }
    }
})