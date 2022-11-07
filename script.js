"use strict";

// 1) LOG IT

// function sayHi(success) {
//   const greeting = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve("Fulfilled");
//       } else {
//         reject("Rejected");
//       }
//     }, 2000);
//   });
//   console.log(greeting); // Kommer vara pending

//   return greeting;
// }

// async function greet() {
//   try {
//     const result = await sayHi(true); // Sätt till false för att få en reject
//     console.log(result);
//   } catch (error) {
//     console.log(error); // Om reject så gå in i denna catch istället
//   }
// }

// greet();

/*

2) POLKA LOVER

Gör en funktion vid namn letsDance(danceStyle)som bygger på ett Promise. Funktionen ska ta ett argument danceStyle. Om dansen som erbjuds är polka ska dansen godkännas med frasen Yes, polka is my thing!. Om Dansstilen som erbjuds är något annat så ska dansförfrågan rejectas med en syrlig diss. Funktionen ska ta 2s på sig att svara.

letsDance('waltz')
.then(resp => console.log(response)) // ...
.catch(diss => console.log(diss)) // Not even if a pandemic roamed the earth
Använd setTimeout för att fördröja funktionerna.

*/

// function letsDance(danceStyle) {
//   const letsDance = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (danceStyle === "polka") {
//         resolve("Yes, polka is my thing!");
//       } else {
//         // console.log("trash");
//         reject("You need more training...");
//       }
//     }, 2000);
//   });
//   // console.log(letsDance);
//   return letsDance;
// }

// function letsDance(danceStyle) {
//   letsDance = new Promise((resolve, reject) => {
//     if (danceStyle === "polka") {
//       resolve("good job");
//     } else {
//       reject("BAD job");
//     }
//   });
//   return letsDance;
// }

// letsDance("polka");

// letsDance("polka")
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/* 

3) WEBBPROJECTET 

Du ska göra ett webbprojekt. Gör en promise kedja för detta projekts moment i följande ordning med följande tider:

Researcha målgruppen - 4s
Skissa upp en design på papper - 2s
Gör skissen till pixel perfect mockup I Figma / XD - 3s
Koda - 3s
Stackoverflow:a fel - 1s
Testa produkten - 2s
Fira lyckat projekt - 1s
Använd setTimeout för att fördröja funktionerna. Använd console.logför meningarna ovan.

*/

function groupResearch() {
  const groupResearch = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolve === false) {
        resolve("Researcha målgruppen");
      } else {
        reject("Rejected");
      }
    }, 4000);
  });
  return groupResearch;
}

function planDesignOnPapper() {
  const planDesignOnPapper = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Skissa upp en design på papper");
    }, 2000);
  });
  return planDesignOnPapper;
}

function makePlanPixelPerfect() {
  const makePlanPixelPerfect = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Gör skissen till pixel perfect mockup I Figma / XD");
    }, 3000);
  });
  return makePlanPixelPerfect;
}

function startCoding() {
  const startCoding = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Koda");
    }, 3000);
  });
  return startCoding;
}

function useStackoverflow() {
  const useStackoverflow = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Stackoverflow:a fel");
    }, 1000);
  });
  return useStackoverflow;
}

function testProduct() {
  const testProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Testa produkten");
    }, 2000);
  });
  return testProduct;
}

function celebrateSuccessfulProject() {
  const celebrateSuccessfulProject = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Fira lyckat projekt 🎉");
    }, 1000);
  });
  return celebrateSuccessfulProject;
}

// groupResearch().then((result) => {
//   console.log("1", result);

//   planDesignOnPapper().then((result) => {
//     console.log("2", result);

//     makePlanPixelPerfect().then((result) => {
//       console.log("3", result);

//       startCoding().then((result) => {
//         console.log("4", result);

//         useStackoverflow().then((result) => {
//           console.log("5", result);

//           testProduct().then((result) => {
//             console.log("6", result);

//             celebrateSuccessfulProject().then((result) => {
//               console.log("7", result);
//             });
//           });
//         });
//       });
//     });
//   });
// });

// 3) Async / Await
// Gör Polka lover och Webbprojektet med Async / Await istället.

async function makeProjectSteps() {
  try {
    const research = await groupResearch();
    console.log(research);
    const planDesign = await planDesignOnPapper();
    console.log(planDesign);
    const pixelPerfect = await makePlanPixelPerfect();
    console.log(pixelPerfect);
    const code = await startCoding();
    console.log(code);
    const stackoverflow = await useStackoverflow();
    console.log(stackoverflow);
    const product = await testProduct();
    console.log(product);
    const celebrate = await celebrateSuccessfulProject();
    console.log(celebrate);
  } catch (error) {
    console.log("error");
  }
}

makeProjectSteps();
