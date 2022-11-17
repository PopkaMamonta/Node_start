const fs=require('fs')
const path=require('path')

// fs.mkdir(path.join(__dirname,'notes'),err=>{
//     if (err) throw err
//     console.log('Папка была создана')
// })
// fs.writeFile(
//     path.join(__dirname,'notes','mynotes.txt'),
//     'Hello World',
//     (err)=>{
//         if (err) throw err
//         console.log('Файл был создан')
//         fs.appendFile(
//             path.join(__dirname,'notes','mynotes.txt'),
//             ' From append file',
//             err=>{
//                 if (err) throw err
//                 console.log('Файл был изменен')
//                 fs.readFile(
//                     path.join(__dirname,'notes','mynotes.txt'),
//                     'utf-8',
//                     (err,data)=>{
//                         if(err) throw err
//                         console.log(data)
//                     }
//                 )
//             }
//         )
//     }
// )
fs.mkdir(path.join(__dirname,'test'),err=>{
    if (err) throw err
    console.log('Создалась папка')
})
fs.writeFile(
    path.join(__dirname,'test','text.txt'),
    'SPTV20',
    (err)=>{
        if (err) throw err
        console.log('Файл создался')
        fs.appendFile(
            path.join(__dirname,'test','text.txt'),
            '2022',
            err=>{
                if (err) throw err
                console.log('Файл изменился')
                fs.rename(
                    path.join(__dirname,'test','text.txt'),
                    path.join(__dirname,'test','mytext.txt'),
                    err=>{
                        if (err) throw err
                        console.log('Файл переименован')
                    }
                )
            }
        )
    }
)