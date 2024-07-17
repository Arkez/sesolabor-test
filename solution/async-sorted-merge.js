"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise( async (resolve, reject) => {

    let response = [];
//     const posts = await Promise.all(

// const sorted =(value)=>{
//   // return value.sort((a,b)=>a.date - b.date)
//   console.log(value)

// }
const test = await Promise.all(
  logSources.map(async (player) => {
      // setTimeout(() => {
        // console.log(i)
        // console.log(player)
        // const sorted =(value)=>{
        //   // return value.sort((a,b)=>a.date - b.date)
        //   // console.log(value)
        //   return value
        
        // }
        // const eee = async () => {
          return await player.popAsync()
          // .then((test)=> sorted(test)).catch((err)=>console.log(err))
          // return response
        // }
        // eee().then((test4)=>{response = test4});

      //  const aaa = await player.popAsync().then((test)=> test).catch((err)=>console.log(err))
    //  return eee
      // const test2 = test.sort((a,b)=>a.date - b.date)
      // }, 2000);
      // return await eee().then((b)=>{response.push(b)})
      // return 'sorted()'
    }));
  test.sort((a,b)=>a.date - b.date).forEach((player) => {
     printer.print(player);
    })
    printer.done()
  
    resolve("Async sort complete.");
  });
};
