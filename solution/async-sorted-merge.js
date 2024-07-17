"use strict";

// Print all entries, across all of the *async* sources, in chronological order.

module.exports = (logSources, printer) => {
  return new Promise( async (resolve, reject) => {

const test = await Promise.all(
  logSources.map(async (log) => {
          return await log.popAsync()
    }));
  test.sort((a,b)=>a.date - b.date).forEach((log) => {
     printer.print(log);
    })
    printer.done()

    resolve("Async sort complete.");
  });
};
