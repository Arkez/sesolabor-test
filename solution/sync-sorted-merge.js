"use strict";

// Print all entries, across all of the sources, in chronological order.

module.exports = (logSources, printer) => {

  const prep = logSources.map((log) => {
   return log.pop()
  }).sort((a,b)=>{
    return a.date - b.date
  })

  prep.forEach((log) => {
   printer.print(log);
  })

  printer.done()
  return console.log("Sync sort complete.");
};
