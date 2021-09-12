// export class DisplayServerError {
//   constructor() {}

//   static parseWebApiError(responce: any): string[] {
//     const result: string[] = [];
//     if (typeof responce.error === "string") {
//       result.push(responce.error);
//       } else {
//         const mapError = responce.error.errors;
//         const entries = Object.entries(mapError);
//         entries.forEach((arr: any[]) => {
//           const field = arr[0];
//           arr[1].forEach((errorMsg) => {
//             result.push(`${field}:${errorMsg}`);
//           });
//         });
//     }
//     return result;
//   }
// }
