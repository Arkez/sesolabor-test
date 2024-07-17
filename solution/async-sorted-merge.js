"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise( async (resolve, reject) => {

const test = await Promise.all(
  logSources.map(async (player) => {
          return await player.popAsync()
    }));
  test.sort((a,b)=>a.date - b.date).forEach((player) => {
     printer.print(player);
    })
    printer.done()

    resolve("Async sort complete.");
  });
};
